var { ipcRenderer } = require('electron');;
const path = require('path')
var select = document.getElementById('selected-color-theme');
var fs = require('fs')
const chokidar = require('chokidar')

//JSON check + colors writen
if(!fs.existsSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json')) {
    var dataToWrite = {
        "isCustomTheme": false,
        "themeName": "normal"
    }

    fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', JSON.stringify(dataToWrite))
}

$('#reset-colortheme-button').on("click", function () {
    $(select).val("Default")
    var dataToWrite = {
        "isCustomTheme": false,
        "themeName": "normal"
    }

    var dataToWriteDown = JSON.stringify(dataToWrite)

    fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
    window.location.href = ""
})

select.addEventListener('change', function () {
    switch (select.value) {
        case "Default":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": "normal"
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Brimstone":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)

            window.location.href = "./settings.html?tab=themes"
            break;
        case "Phoenix":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Sage":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Sova":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Viper":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Cypher":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Reyna":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Killjoy":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Breach":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Omen":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Jett":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Raze":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Skye":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Yoru":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Astra":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Kayo":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Chamber":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "Neon":
            var dataToWrite = {
                "isCustomTheme": false,
                "themeName": select.value.toLowerCase()
            }

            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
        case "custom-theme":
            var dataToWrite = {
                "isCustomTheme": true,
                "themeName": select.options[select.selectedIndex].text
            }
            var dataToWriteDown = JSON.stringify(dataToWrite)

            fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
            window.location.href = "./settings.html?tab=themes"
            break;
    }
});

$(document).ready(() => {
    let rawColorData = fs.readFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json');
    let colorData = JSON.parse(rawColorData);

    var i = 0;
    fs.readdir(process.env.APPDATA + "/VALTracker/user_data/themes/custom_themes", (err, files) => {
        files.forEach(file => {
            if(file.split(".").pop() == "json") {
                var option = document.createElement("option")
                option.appendChild(document.createTextNode(path.parse(file).name))
                option.value = `custom-theme`
                option.className = "customThemeOption"

                var wrapper = document.getElementById("custom-color-themes")
                var nextElement = document.getElementById("themes-bottom");
                wrapper.insertBefore(option, nextElement);
                i++;
            }
        });
    });

    setTimeout(function () {
        if(colorData.isCustomTheme == true) {
            for (var count = 0; count < i; count++) {
                if(document.getElementsByClassName('customThemeOption').item(count).textContent == colorData.themeName) {
                    document.getElementsByClassName('customThemeOption')[count].value = "custom-theme-used"
                    $(select).val("custom-theme-used")
                }
            }
            $('#edit-custom-theme-button').css("display", "inline-block");
            $('#delete-custom-theme-button').css("display", "inline-block");
            $('#custom-theme-req').css("display", "flex");
        } else {
            let word = colorData.themeName;
            if(word == "normal") {
                word = "default"
            }
            let titleCase = word[0].toUpperCase() + word.substr(1);
            $(select).val(titleCase)
        }
    }, 100)

    const {
        shell
    } = require('electron')
    $('#open-custom-theme-folder-button').on("click", function () {
        shell.openPath(process.env.APPDATA + "/VALTracker/user_data/themes/custom_themes");
    })

    var watcher = chokidar.watch(process.env.APPDATA + '/VALTracker/user_data/themes/custom_themes', { awaitWriteFinish: true});

    setTimeout(function() {
        watcher.on('add', async function(file) {
            if(file.split(".").pop() == "json") {
                var usedTheme = colorData.themeName;

                $('.customThemeOption').remove();
                
                var files = fs.readdirSync(process.env.APPDATA + "/VALTracker/user_data/themes/custom_themes")
                files.forEach(file => {
                    if(file.split(".").pop() == "json") {
                        var option = document.createElement("option")
                        option.appendChild(document.createTextNode(path.parse(file).name))
                        if(path.parse(file).name == usedTheme) {
                            option.value = `custom-theme-used`
                        } else {
                            option.value = `custom-theme`
                        }
                        option.className = "customThemeOption"
        
                        var wrapper = document.getElementById("custom-color-themes")
                        var nextElement = document.getElementById("themes-bottom");
                        wrapper.insertBefore(option, nextElement);
                    }
                });

                if(colorData.isCustomTheme == true) {
                    $(`.customThemeOption[value="${usedTheme}"]`).val("custom-theme-used")

                    $(select).val("custom-theme-used")
                }
            }
        })
        watcher.on('unlink', async function(file) {
            var currentTheme = colorData.themeName
            var deletedTheme = file.split('\\').pop()
            if(colorData.isCustomTheme == false) {
                var deletedFileWithoutType = deletedTheme.substring(0, deletedTheme.lastIndexOf("."));
                $(`#custom-color-themes option[value="${deletedFileWithoutType}"]`).remove();
            } else {
                if(currentTheme == deletedTheme) {
                    var dataToWrite = {
                        "isCustomTheme": false,
                        "themeName": "normal"
                    }
        
                    var dataToWriteDown = JSON.stringify(dataToWrite)
        
                    fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)
                    window.location.href = ""
                } else {
                    var deletedFileWithoutType = deletedTheme.substring(0, deletedTheme.lastIndexOf("."));
                    $(`#custom-color-themes option[value="${deletedFileWithoutType}"]`).remove();
                }
            }
        })
    }, 100)
    
    $('#delete-custom-theme-button').on("click", function() {
        if(colorData.isCustomTheme == true) {
            var files = fs.readdirSync(process.env.APPDATA + "/VALTracker/user_data/themes/custom_themes")
            files.forEach(file => {
                if(file.split(".").pop() == "json") {
                    if(file.substring(0, file.lastIndexOf(".")) == colorData.themeName) {
                        fs.unlinkSync(process.env.APPDATA + "/VALTracker/user_data/themes/custom_themes/" + file)
                        
                        var dataToWrite = {
                            "isCustomTheme": false,
                            "themeName": "normal"
                        }
            
                        var dataToWriteDown = JSON.stringify(dataToWrite)
            
                        fs.writeFileSync(process.env.APPDATA + '/VALTracker/user_data/themes/color_theme.json', dataToWriteDown)

                        window.location.href = ""
                    }
                }
            });
        }
    });
})