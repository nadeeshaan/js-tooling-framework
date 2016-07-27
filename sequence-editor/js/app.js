/**
 * Copyright (c) 2016, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var lifeLineOptions = {};
lifeLineOptions.class = "lifeline";
// rectangle options
lifeLineOptions.rect = {};
lifeLineOptions.rect.width = 200;
lifeLineOptions.rect.height = 75;
lifeLineOptions.rect.roundX = 20;
lifeLineOptions.rect.roundY = 20;
lifeLineOptions.rect.class = "lifeline-rect";
// line options
lifeLineOptions.line =  {};
lifeLineOptions.line.height = 800;
lifeLineOptions.line.class = "lifeline-line";
// text options
lifeLineOptions.text = {};
lifeLineOptions.text.class = "lifeline-title";

var createPoint = function(x, y){
    return new GeoCore.Models.Point({'x': x, 'y': y});
};

var createLifeLine = function(title, center){
    return new SequenceD.Models.LifeLine({title:title, centerPoint: center});
};

var createMessage = function(start, end){
    return new SequenceD.Models.Message({source: start, destination: end});
};

// create the model for diagram
var diagram = new Diagrams.Models.Diagram({});

// create diagram view
var diagramOptions = {selector : '.editor' };
var diagramView = new Diagrams.Views.DiagramView({model: diagram, options:diagramOptions});
diagramView.render();

var lifeline1 = createLifeLine("LifeLine1",createPoint(250, 50));
diagram.addElement(lifeline1, lifeLineOptions);
var lifeline2 = createLifeLine("LifeLine2",createPoint(500, 50));
diagram.addElement(lifeline2, lifeLineOptions);

var lf1Activation1 = new SequenceD.Models.Activation({owner:lifeline1});
var lf2Activation1 = new SequenceD.Models.Activation({owner:lifeline2});

var messageOptions = {'class':'message'};
var msg1 = new SequenceD.Models.Message({source: lf1Activation1, destination: lf2Activation1});
diagram.addElement(msg1, messageOptions);
var msg2 = new SequenceD.Models.Message({source: lf2Activation1, destination: lf1Activation1});
diagram.addElement(msg2, messageOptions);
var msg3 = new SequenceD.Models.Message({source: lf1Activation1, destination: lf2Activation1});
diagram.addElement(msg3, messageOptions);
