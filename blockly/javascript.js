Blockly.JavaScript['sweetalert'] = function (block) {
  var value_msg = Blockly.JavaScript.valueToCode(block, 'msg', Blockly.JavaScript.ORDER_ATOMIC);
  var code = "sweetAlert(" + value_msg + ");\n";
  return code;
};
