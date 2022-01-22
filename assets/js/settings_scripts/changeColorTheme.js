var ipc = require('electron').ipcRenderer;
const path = require('path')
var select = document.getElementById('selected-color-theme');

const replaceText3 = (text) => {
    const element3 = document.getElementById("replace-textspan-3");
    if (element3) element3.innerText = text
}

//JSON check + colors writen
if(!fs.existsSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json')) {
    var dataToWrite = {
        "app_color": "#12171d",
        "app_subcolor_1": "#1b222b",
        "app_subcolor_2": "#242e3a",
        "gradient_left": "#c80043",
        "gradient_right": "#6f00ff",
        "box_shadow": "0 0 2.5px rgba(255, 0, 67, 0.7), 0 0 10px rgba(255, 0, 67, 0.7), 0 0 30px rgba(255, 0, 67, 0.7)",
        "text_shadow": "0 0 5px rgba(255, 0, 67, 0.6), 0 0 20px rgba(255, 0, 67, 0.6), 0 0 60px rgba(255, 0, 67, 0.6)",
        "button_color": "#c80043",
        "button_hover_color": "#ff0055",
        "logo_style": "default",
        "button_color_var": "#ffffff",
        "global_color": "#ffffff",
        "loadCustomTheme": false
    }
    console.log(dataToWrite)

    fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', JSON.stringify(dataToWrite))
}

$('#reset-colortheme-button').on("click", function() {
    $(select).val("Default")
    var dataToWrite = {
        "app_color": "#12171d",
        "app_subcolor_1": "#1b222b",
        "app_subcolor_2": "#242e3a",
        "gradient_left": "#c80043",
        "gradient_right": "#6f00ff",
        "box_shadow": "0 0 2.5px rgba(255, 0, 67, 0.7), 0 0 10px rgba(255, 0, 67, 0.7), 0 0 30px rgba(255, 0, 67, 0.7)",
        "text_shadow": "0 0 5px rgba(255, 0, 67, 0.6), 0 0 20px rgba(255, 0, 67, 0.6), 0 0 60px rgba(255, 0, 67, 0.6)",
        "button_color": "#c80043",
        "button_hover_color": "#ff0055",
        "logo_style": "default",
        "button_color_var": "#ffffff",
        "global_color": "#ffffff",
        "loadCustomTheme": false
    }

    var dataToWriteDown = JSON.stringify(dataToWrite)

    fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

    ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_default.png`)
    window.location.href = ""
})

let root2 = document.documentElement;
select.addEventListener('change', function() {
    switch (select.value) {
        case "Default":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#c80043",
                "gradient_right": "#6f00ff",
                "box_shadow": "0 0 2.5px rgba(255, 0, 67, 0.7), 0 0 10px rgba(255, 0, 67, 0.7), 0 0 30px rgba(255, 0, 67, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 0, 67, 0.6), 0 0 20px rgba(255, 0, 67, 0.6), 0 0 60px rgba(255, 0, 67, 0.6)",
                "button_color": "#c80043",
                "button_hover_color": "#ff0055",
                "logo_style": "default",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Brimstone":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#ff6600",
                "gradient_right": "#525252",
                "box_shadow": "0 0 2.5px rgba(255, 102, 0, 0.7), 0 0 10px rgba(255, 102, 0, 0.7), 0 0 30px rgba(255, 102, 0, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 102, 0, 0.6), 0 0 20px rgba(255, 102, 0, 0.6), 0 0 60px rgba(255, 102, 0, 0.6)",
                "button_color": "#ff6600",
                "button_hover_color": "#fc8231",
                "logo_style": "brimstone",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Phoenix":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#ff0000",
                "gradient_right": "#ff5050",
                "box_shadow": "0 0 2.5px rgba(255, 37, 37, 0.7), 0 0 10px rgba(255, 37, 37, 0.7), 0 0 30px rgba(255, 37, 37, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 37, 37, 0.6), 0 0 20px rgba(255, 37, 37, 0.6), 0 0 60px rgba(255, 37, 37, 0.6)",
                "button_color": "#ff6600",
                "button_hover_color": "#ff684e",
                "logo_style": "phoenix",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Sage":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#3892b8",
                "gradient_right": "#23fdd7",
                "box_shadow": "0 0 2.5px rgba(103, 204, 247, 0.7), 0 0 10px rgba(103, 204, 247, 0.7), 0 0 30px rgba(103, 204, 247, 0.7)",
                "text_shadow": "0 0 5px rgba(103, 204, 247, 0.6), 0 0 20px rgba(103, 204, 247, 0.6), 0 0 60px rgba(103, 204, 247, 0.6)",
                "button_color": "#3892b8",
                "button_hover_color": "#67ccf7",
                "logo_style": "sage",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Sova":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#263ca1",
                "gradient_right": "#506be4",
                "box_shadow": "0 0 2.5px rgba(80, 107, 228, 0.7), 0 0 10px rgba(80, 107, 228, 0.7), 0 0 30px rgba(80, 107, 228, 0.7)",
                "text_shadow": "0 0 5px rgba(80, 107, 228, 0.6), 0 0 20px rgba(80, 107, 228, 0.6), 0 0 60px rgba(80, 107, 228, 0.6)",
                "button_color": "#263ca1",
                "button_hover_color": "#506be4",
                "logo_style": "sova",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Viper":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#046327",
                "gradient_right": "#0cef30",
                "box_shadow": "0 0 2.5px rgba(34, 199, 95, 0.7), 0 0 10px rgba(34, 199, 95, 0.7), 0 0 30px rgba(34, 199, 95, 0.7)",
                "text_shadow": "0 0 5px rgba(34, 199, 95, 0.6), 0 0 20px rgba(34, 199, 95, 0.6), 0 0 60px rgba(34, 199, 95, 0.6)",
                "button_color": "#046327",
                "button_hover_color": "#22c75f",
                "logo_style": "viper",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Cypher":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#bebebe",
                "gradient_right": "#3c3d4e",
                "box_shadow": "0 0 2.5px rgba(255, 255, 255, 0.7), 0 0 10px rgba(255, 255, 255, 0.7), 0 0 30px rgba(255, 255, 255, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 60px rgba(255, 255, 255, 0.6)",
                "button_color": "#bebebe",
                "button_hover_color": "#ffffff",
                "logo_style": "cypher",
                "button_color_var": "#000000",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Reyna":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#ee0dbc",
                "gradient_right": "#993586",
                "box_shadow": "0 0 2.5px rgba(255, 71, 215, 0.7), 0 0 10px rgba(255, 71, 215, 0.7), 0 0 30px rgba(255, 71, 215, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 71, 215, 0.6), 0 0 20px rgba(255, 71, 215, 0.6), 0 0 60px rgba(255, 71, 215, 0.6)",
                "button_color": "#ee0dbc",
                "button_hover_color": "#ff47d7",
                "logo_style": "reyna",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Killjoy":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#fdf130",
                "gradient_right": "#993586",
                "box_shadow": "0 0 2.5px rgba(207, 112, 193, 0.7), 0 0 10px rgba(207, 112, 193, 0.7), 0 0 30px rgba(207, 112, 193, 0.7)",
                "text_shadow": "0 0 5px rgba(207, 112, 193, 0.6), 0 0 20px rgba(207, 112, 193, 0.6), 0 0 60px rgba(207, 112, 193, 0.6)",
                "button_color": "#fdf130",
                "button_hover_color": "#cf70c1",
                "logo_style": "killjoy",
                "button_color_var": "#000000",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Breach":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#d84611",
                "gradient_right": "#50967a",
                "box_shadow": "0 0 2.5px rgba(255, 144, 104, 0.7), 0 0 10px rgba(255, 144, 104, 0.7), 0 0 30px rgba(255, 144, 104, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 144, 104, 0.6), 0 0 20px rgba(255, 144, 104, 0.6), 0 0 60px rgba(255, 144, 104, 0.6)",
                "button_color": "#d84611",
                "button_hover_color": "#ff9068",
                "logo_style": "breach",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Omen":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#4229be",
                "gradient_right": "#17f3f7",
                "box_shadow": "0 0 5px rgba(100, 70, 252, 0.7), 0 0 20px rgba(100, 70, 252, 0.7), 0 0 60px rgba(100, 70, 252, 0.7)",
                "text_shadow": "0 0 5px rgba(100, 70, 252, 0.6), 0 0 20px rgba(100, 70, 252, 0.6), 0 0 60px rgba(100, 70, 252, 0.6)",
                "button_color": "#4229be",
                "button_hover_color": "#6446fc",
                "logo_style": "omen",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Jett":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#4bc4c8",
                "gradient_right": "#024e88",
                "box_shadow": "0 0 2.5px rgba(0, 247, 255, 0.7), 0 0 10px rgba(0, 247, 255, 0.7), 0 0 30px rgba(0, 247, 255, 0.7)",
                "text_shadow": "0 0 5px rgba(0, 247, 255, 0.6), 0 0 20px rgba(0, 247, 255, 0.6), 0 0 60px rgba(0, 247, 255, 0.6)",
                "button_color": "#4bc4c8",
                "button_hover_color": "#00f7ff",
                "logo_style": "jett",
                "button_color_var": "#000000",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Raze":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#ff4b00",
                "gradient_right": "#1ab38e",
                "box_shadow": "0 0 2.5px rgba(255, 126, 71, 0.7), 0 0 10px rgba(255, 126, 71, 0.7), 0 0 30px rgba(255, 126, 71, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 126, 71, 0.6), 0 0 20px rgba(255, 126, 71, 0.6), 0 0 60px rgba(255, 126, 71, 0.6)",
                "button_color": "#ff4b00",
                "button_hover_color": "#ff7e47",
                "logo_style": "raze",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Skye":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#00aa94",
                "gradient_right": "#68fef0",
                "box_shadow": "0 0 2.5px rgba(0, 230, 199, 0.7), 0 0 10px rgba(0, 230, 199, 0.7), 0 0 30px rgba(0, 230, 199, 0.7)",
                "text_shadow": "0 0 5px rgba(0, 230, 199, 0.6), 0 0 20px rgba(0, 230, 199, 0.6), 0 0 60px rgba(0, 230, 199, 0.6)",
                "button_color": "#00aa94",
                "button_hover_color": "#00e6c7",
                "logo_style": "skye",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Yoru":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#0001fe",
                "gradient_right": "#9cfeff",
                "box_shadow": "0 0 2.5px rgba(0, 68, 255, 0.7), 0 0 10px rgba(0, 68, 255, 0.7), 0 0 30px rgba(0, 68, 255, 0.7)",
                "text_shadow": "0 0 5px rgba(0, 68, 255, 0.6), 0 0 20px rgba(0, 68, 255, 0.6), 0 0 60px rgba(0, 68, 255, 0.6)",
                "button_color": "#0001fe",
                "button_hover_color": "#0044ff",
                "logo_style": "yoru",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Astra":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#6b12d2",
                "gradient_right": "#f7aa5f",
                "box_shadow": "0 0 2.5px rgba(163, 82, 255, 0.7), 0 0 10px rgba(163, 82, 255, 0.7), 0 0 30px rgba(163, 82, 255, 0.7)",
                "text_shadow": "0 0 5px rgba(163, 82, 255, 0.6), 0 0 20px rgba(163, 82, 255, 0.6), 0 0 60px rgba(163, 82, 255, 0.6)",
                "button_color": "#6b12d2",
                "button_hover_color": "#a352ff",
                "logo_style": "astra",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "KayO":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#9be4ff",
                "gradient_right": "#4549e6",
                "box_shadow": "0 0 2.5px rgba(240, 116, 255, 0.7), 0 0 10px rgba(240, 116, 255, 0.7), 0 0 30px rgba(240, 116, 255, 0.7)",
                "text_shadow": "0 0 5px rgba(240, 116, 255, 0.6), 0 0 20px rgba(240, 116, 255, 0.6), 0 0 60px rgba(240, 116, 255, 0.6)",
                "button_color": "#4549e6",
                "button_hover_color": "#f074ff",
                "logo_style": "kayO",
                "button_color_var": "#ffffff",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Chamber":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#e59430",
                "gradient_right": "#3f1cc5",
                "box_shadow": "0 0 2.5px rgba(255, 214, 79, 0.7), 0 0 10px rgba(255, 214, 79, 0.7), 0 0 30px rgba(255, 214, 79, 0.7)",
                "text_shadow": "0 0 5px rgba(255, 214, 79, 0.6), 0 0 20px rgba(255, 214, 79, 0.6), 0 0 60px rgba(255, 214, 79, 0.6)",
                "button_color": "#e59430",
                "button_hover_color": "#ffd64f",
                "logo_style": "chamber",
                "button_color_var": "#000000",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "Neon":
            var dataToWrite = {
                "app_color": "#12171d",
                "app_subcolor_1": "#1b222b",
                "app_subcolor_2": "#242e3a",
                "gradient_left": "#aaee22",
                "gradient_right": "#02feff",
                "box_shadow": "0 0 2.5px rgba(205, 255, 87, 0.7), 0 0 10px rgba(205, 255, 87, 0.7), 0 0 30px rgba(205, 255, 87, 0.7)",
                "text_shadow": "0 0 5px rgba(205, 255, 87, 0.6), 0 0 20px rgba(205, 255, 87, 0.6), 0 0 60px rgba(205, 255, 87, 0.6)",
                "button_color": "#aaee22",
                "button_hover_color": "#cdff57",
                "logo_style": "neon",
                "button_color_var": "#000000",
                "global_color": "#ffffff",
                "loadCustomTheme": false
            }
        
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)

            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_${dataToWrite.logo_style}.png`)
            window.location.href = ""
            break;
        case "custom-theme":
            var dataToWrite = {
                "loadCustomTheme": true, 
                "customThemeName": select.options[select.selectedIndex].text
            }
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json', dataToWriteDown)
    
            ipc.send('changeTrayIcon', `./iconss/VALTracker_Logo_default.png`)
            window.location.href = ""
            break;
    }
});

$(document).ready(() => {
    let rawColorData = fs.readFileSync(process.env.APPDATA + '/VALTracker/settings/colorTheme.json');
    let colorData = JSON.parse(rawColorData);

    var i = 0;
    fs.readdir(process.env.APPDATA + "/VALTracker/settings/customThemes", (err, files) => {
        files.forEach(file => {
            var option = document.createElement("option")
            option.appendChild(document.createTextNode(path.parse(file).name))
            option.value = `custom-theme`
            option.className = "customThemeOption"

            var wrapper = document.getElementById("selected-color-theme")
            var nextElement = document.getElementById("themes-bottom");
            wrapper.insertBefore(option, nextElement);
            i++;
        });
    });
    
    setTimeout(function() {

        if(colorData.loadCustomTheme == true) {
            for(var count = 0; count < i; count++) {
                if(document.getElementsByClassName('customThemeOption').item(count).textContent == colorData.customThemeName) {
                    document.getElementsByClassName('customThemeOption')[count].value = "custom-theme-used"
                    $(select).val("custom-theme-used")
                }
            }
            $('#edit-custom-theme-button').css("display", "inline-block");
        } else {
            let word = colorData.logo_style;
            let titleCase = word[0].toUpperCase() + word.substr(1);
            $(select).val(titleCase)
        }
    }, 500)

    const { shell } = require('electron').remote
    $('#open-custom-theme-folder-button').on("click", function() {
        shell.openPath(process.env.APPDATA + "/VALTracker/settings/customThemes")
    })
})