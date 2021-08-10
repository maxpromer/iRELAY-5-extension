({
    name: "iRELAY-5", // Category Name
    description: "Extension for iRELAY-5",
    author: "INEX",
    category: "Signal Input/Output",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#2ECC71", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        {
            xml:
               `<block type="irelay_5_on_auto_off">
                    <value name="time">
                        <shadow type="math_number">
                            <field name="NUM">3</field>
                        </shadow>
                    </value>
                </block>`
        }
    ]
});
