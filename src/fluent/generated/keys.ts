import "@servicenow/sdk/global";

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                        "cs0": {
                            "table": "sys_script_client",
                            "id": "7c386d97e85c4de9990007be0970fedc"
                        },
                        "src_server_script_ts": {
                            "table": "sys_module",
                            "id": "8e254f32e1a844d680201a582cf8b59b"
                        },
                        "br0": {
                            "table": "sys_script",
                            "id": "2066d4c7ed7e447c8a637d40805b736d"
                        },
                        "package_json": {
                            "table": "sys_module",
                            "id": "278725f03dea4501b3fc69df9aac7185"
                        }
                    };
                composite: [
                        {
                            "table": "sys_module",
                            "id": "52539749906b4bd3b95a80844802920a",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "index.js"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "423dddb8582f43b6984d4df94fb09258",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "cyclonedx/bom.json"
                            }
                        },
                        {
                            "table": "sys_module",
                            "id": "28b2d102fcaa47cdbc5f8c37c7186b07",
                            "key": {
                                "module": "lodash.snakecase@4.1.1",
                                "file": "package.json"
                            }
                        }
                    ];
            }
        }
    }
}
