const ColorBlock = "#0b5394";

Blockly.Blocks['ai_camera_init'] = {
  init: function() {
    this.jsonInit(
      {
        type: "ai_camera_init",
        message0: "khởi tạo Camera AI chân RX %1 TX %2",
        previousStatement: null,
        nextStatement: null,
        args0: [
          {
            type: "field_dropdown",
            name: "RX",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ]
            ]
          },
          {
            "type": "field_dropdown",
            "name": "TX",
            "options": [
              [
                "P0",
                "pin0"
              ],
              [
                "P1",
                "pin1"
              ],
              [
                "P2",
                "pin2"
              ],
              [
                "P3",
                "pin3"
              ],
              [
                "P4",
                "pin4"
              ],
              [
                "P5",
                "pin5"
              ],
              [
                "P6",
                "pin6"
              ],
              [
                "P7",
                "pin7"
              ],
              [
                "P8",
                "pin8"
              ],
              [
                "P9",
                "pin9"
              ],
              [
                "P10",
                "pin10"
              ],
              [
                "P11",
                "pin11"
              ],              
              [
                "P12",
                "pin12"
              ],
              [
                "P13",
                "pin13"
              ],
              [
                "P14",
                "pin14"
              ],
              [
                "P15",
                "pin15"
              ],
              [
                "P16",
                "pin16"
              ]
            ]
          }
        ],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};

Blockly.Python['ai_camera_init'] = function(block) {
  // TODO: Assemble Python into code variable.
  var tx = block.getFieldValue('TX');
  var rx = block.getFieldValue('RX');
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_camera_ai'] = 'from camera_ai import *';
  var code = 'ai_cam = AI_CAMERA(' + rx + '.pin, ' + tx + '.pin)\n';
  return code;
};

Blockly.Blocks['ai_camera_init_mobile_app'] = {
  init: function() {
    this.jsonInit(
      {
        type: "ai_camera_init",
        message0: "khởi tạo Camera AI dùng OhStem App",
        previousStatement: null,
        nextStatement: null,
        args0: [],
        colour: ColorBlock,
        tooltip: "",
        helpUrl: ""
      }
    );
  }
};

Blockly.Python['ai_camera_init_mobile_app'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_camera_ai'] = 'from camera_ai import *';
  var code = 'ai_cam = AI_CAMERA()\n';
  return code;
};

Blockly.Blocks["ai_camera_check_result"] = {
  init: function () {
    this.jsonInit({
      colour: "#0b5394",
      tooltip: "",
      message0: "camera nhận dạng %1 %2 độ tin cậy > %3 %4",
      output: "Boolean",
      args0: [
        {
          type: "field_dropdown",
          name: "EQUAL",
          "options": [
            [
              "được là",
              "False"
            ],
            [
              "khác",
              "True"
            ]
          ]
        },
        {
          type: "input_value",
          name: "CLASS"          
        },
        { type: "input_value", name: "PREDICTION", check: "Number" },
        { type: "input_dummy" },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Python['ai_camera_check_result'] = function(block) {
  // TODO: Assemble Python into code variable.
  var port = block.getFieldValue('PORT');
  var equal = block.getFieldValue('EQUAL');
  var prediction = Blockly.Python.valueToCode(block, 'PREDICTION', Blockly.Python.ORDER_ATOMIC);
  var string = Blockly.Python.valueToCode(block, 'CLASS', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_ai_camera'] = 'from camera_ai import *';
  var code = 'ai_cam.check(' + string + ', ' + prediction + ', ' + equal + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["ai_camera_update"] = {
  init: function () {
    this.jsonInit({
      previousStatement: null,
      nextStatement: null,
      colour: "#0b5394",
      tooltip: "",
      message0: "camera cập nhật nhận dạng",
      args0: [
      ],
      helpUrl: "",
    });
  },
};

Blockly.Python['ai_camera_update'] = function(block) {
  // TODO: Assemble Python into code variable.
  var port = block.getFieldValue('PORT');
  Blockly.Python.definitions_['import_ai_camera'] = 'from camera_ai import *';
  var code = 'ai_cam.update()\n';
  return code;
};

Blockly.Blocks["ai_camera_get_classname"] = {
  init: function () {
    this.jsonInit({
      colour: "#0b5394",
      tooltip: "",
      message0: "đọc kết quả nhận dạng",
      args0: [
      ],
      output: null,      
      helpUrl: "",
    });
  },
};

Blockly.Python['ai_camera_get_classname'] = function(block) {
  // TODO: Assemble Python into code variable.
  var port = block.getFieldValue('PORT');
  Blockly.Python.definitions_['import_ai_camera'] = 'from camera_ai import *';
  Blockly.Python.definitions_['init_ai_camera_' + port] = 'ai_camera_' + port + ' = AI_CAMERA(' + port + '2_PIN, ' + port + '1_PIN)\n';
  var code = 'ai_cam.get_classname()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["ai_camera_get_prediction"] = {
  init: function () {
    this.jsonInit({
      colour: "#0b5394",
      tooltip: "",
      message0: "độ tin cậy",
      message0: "đọc độ tin cậy",
      args0: [
      ],
      output: null,
      helpUrl: "",
    });
  },
};

Blockly.Python['ai_camera_get_prediction'] = function(block) {
  // TODO: Assemble Python into code variable.
  var port = block.getFieldValue('PORT');
  Blockly.Python.definitions_['import_ai_camera'] = 'from camera_ai import *';
  var code = 'ai_cam.get_prediction()';
  return [code, Blockly.Python.ORDER_NONE];
};


















Blockly.Blocks["ai_result"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "kết quả nhận dạng có chứa %1",
      output: "Boolean",
      args0: [
        {
          type: "input_value",
          name: "string"          
        }
      ],
      helpUrl: "",
    });
  },
};

Blockly.Python['ai_result'] = function(block) {
  // TODO: Assemble Python into code variable.
  var string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_camera_ai'] = 'from camera_ai import *';
  var code = 'camera.camera.get_classname() == ' + string;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["ai_update"] = {
  init: function () {
    this.jsonInit({
      previousStatement: null,
      nextStatement: null,
      colour: ColorBlock,
      tooltip: "",
      message0: "cập nhật kết quả AI",
      args0: [
        
      ],
      helpUrl: "",
    });
  },
};

Blockly.Python['ai_update'] = function(block) {
  // TODO: Assemble Python into code variable.
  //var string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_camera_ai'] = 'from camera_ai import *';
  var code = 'camera.update_prediction()\n';
  return code;
};

Blockly.Blocks["camera_get_classname"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "kết quả nhận dạng",
      output: null,      
      helpUrl: "",
    });
  },
};

Blockly.Python['camera_get_classname'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_camera_ai'] = 'from camera_ai import *';
  var code = 'camera.get_classname()';  
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["camera_get_prediction"] = {
  init: function () {
    this.jsonInit({
      colour: ColorBlock,
      tooltip: "",
      message0: "độ tin cậy",
      output: null,
      helpUrl: "",
    });
  },
};

Blockly.Python['camera_get_prediction'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_camera_ai'] = 'from camera_ai import *';
  var code = 'camera.get_prediction()';  
  return [code, Blockly.Python.ORDER_NONE];
};