Blockly.Blocks['sweetalert'] = {
  init: function () {
    this.appendValueInput("msg")
      .setCheck(null)
      .appendField(Blockly.Msg.SWEET_ALERT)
      .appendField("");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(0);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
