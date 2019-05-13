/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
var instances = {};

module.exports = function(instance_id) {
    if (instances[instance_id]) {
        return instances[instance_id];
    }
var fs = require('fs');
var fspath = require('path');
var when = require('when');

var runtime;

var exampleRoots = {};
var exampleFlows = null;

function getFlowsFromPath(path) {
    return when.promise(function(resolve,reject) {
        var result = {};
        fs.readdir(path,function(err,files) {
            var promises = [];
            var validFiles = [];
            files.forEach(function(file) {
                var fullPath = fspath.join(path,file);
                var stats = fs.lstatSync(fullPath);
                if (stats.isDirectory()) {
                    validFiles.push(file);
                    promises.push(getFlowsFromPath(fullPath));
                } else if (/\.json$/.test(file)){
                    validFiles.push(file);
                    promises.push(when.resolve(file.split(".")[0]))
                }
            })
            var i=0;
            when.all(promises).then(function(results) {
                results.forEach(function(r) {
                    if (typeof r === 'string') {
                        result.f = result.f||[];
                        result.f.push(r);
                    } else {
                        result.d = result.d||{};
                        result.d[validFiles[i]] = r;
                    }
                    i++;
                })

                resolve(result);
            })
        });
    })
}

function addNodeExamplesDir(module) {
    exampleRoots[module.name] = module.path;
    getFlowsFromPath(module.path).then(function(result) {
        exampleFlows = exampleFlows||{d:{}};
        exampleFlows.d[module.name] = result;
    });
}
function removeNodeExamplesDir(module) {
    delete exampleRoots[module];
    if (exampleFlows && exampleFlows.d) {
        delete exampleFlows.d[module];
    }
    if (exampleFlows && Object.keys(exampleFlows.d).length === 0) {
        exampleFlows = null;
    }
}


function init(_runtime) {

    runtime = _runtime;

    exampleRoots = {};
    exampleFlows = null;

    runtime.events.removeListener("node-examples-dir",addNodeExamplesDir);
    runtime.events.on("node-examples-dir",addNodeExamplesDir);
    runtime.events.removeListener("node-module-uninstalled",removeNodeExamplesDir);
    runtime.events.on("node-module-uninstalled",removeNodeExamplesDir);
}

function getExampleFlows() {
    return exampleFlows;
}

function getExampleFlowPath(module,path) {
    if (exampleRoots[module]) {
        return fspath.join(exampleRoots[module],path)+".json";
    }
    return null;
}

var result =  {
    init: init,
    getExampleFlows: getExampleFlows,
    getExampleFlowPath: getExampleFlowPath
}

instances[instance_id] = result;
return result;

};