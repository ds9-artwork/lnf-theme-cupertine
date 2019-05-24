var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/General": {
                    "ToolBoxButtonState": "bottomright",
                    "ToolBoxButtonX": "5000",
                    "ToolBoxButtonY": "5000",
                    "pressToMove": "false",
                    "pressToMoveHelp": "false"
                },
                "/Wallpaper/org.kde.image/General": {
                    "FillMode": "2",
                    "Image": "SunsetMountainTop",
                    "height": "1050",
                    "width": "1680"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                }
            },
            "height": 1.5,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 1000,
            "minimumLength": 1000,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
