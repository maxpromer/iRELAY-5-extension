Blockly.Python['irelay_5_set'] = function (block) {
    Blockly.Python.definitions_['import_iRELAY5'] = 'import iRELAY5';

    var dropdown_ch = block.getFieldValue('ch');
    var dropdown_value = block.getFieldValue('value');

    var code = `iRELAY5.set(${dropdown_ch}, ${dropdown_value})\n`;
    return code;
};

Blockly.Python['irelay_5_set_all'] = function (block) {
    Blockly.Python.definitions_['import_iRELAY5'] = 'import iRELAY5';

    var dropdown_value = block.getFieldValue('value');

    var code = `iRELAY5.set_all(${dropdown_value})\n`;
    return code;
};

Blockly.Python['irelay_5_on_auto_off'] = function (block) {
    Blockly.Python.definitions_['import_iRELAY5'] = 'import iRELAY5';
    
    var dropdown_ch = block.getFieldValue('ch');
    var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);

    var code = `iRELAY5.set_on_auto_off(${dropdown_ch}, ${value_time})\n`;
    return code;
};
