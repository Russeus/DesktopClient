$(document).ready(() => {
    setTimeout(function() {
        let rawdata = fs.readFileSync(process.env.APPDATA + '/VALTracker/settings/userData.json');
        let dataToRead = JSON.parse(rawdata);

        var playerName = dataToRead.playerName
        var playerTag = dataToRead.playerTag
        var filterType = document.getElementById('selected-matchtype').value;
        let titleCase = filterType[0].toUpperCase() + filterType.substr(1);
        $('#home-stats-header').empty()
        $('#home-stats-header').append(`Stats of your last 5 ${titleCase} Matches`)
        $("#selected-matchtype").change(function(){
            document.querySelectorAll('.home-matchtile').forEach(e => e.remove());
            if(filterType == "") {
                $.ajax({
                    dataType: "json",
                    url: `https://api.henrikdev.xyz/valorant/v3/matches/eu/${playerName}/${playerTag}`,
                    type: 'get',
                    success: function(data3, xhr) {
                        for(var count = 0; count < data3.data.length; count++) {
                
                            var Matchcontainer = document.createElement("div");
                            Matchcontainer.className = "home-matchtile";
                
                            var matchmodeIcon = document.createElement("img");
                            matchmodeIcon.className = "match-mode-icon-home";
                            var matchmode = data3.data[count].metadata.mode
                            if(matchmode == "Unrated" || matchmode == "Competitive" || matchmode == "Custom Game") {
                                matchmodeIcon.setAttribute("src", "./assets/img/standard.png")
                            } else {
                                matchmodeIcon.setAttribute("src", `./assets/img/${matchmode.toLowerCase()}.png`)
                            }
                
                            var matchMap = document.createElement("span");
                            matchMap.className = "match-map-home";
                            matchMap.appendChild(document.createTextNode(`Map: ${data3.data[count].metadata.map}`));
                
                            var playedAgent = document.createElement("img");
                            playedAgent.className = "match-played-agent-home";
                
                            for(var playerCount = 0; playerCount < data3.data[count].players.all_players.length; playerCount++) {
                                if(data3.data[count].players.all_players[playerCount].name == playerName && data3.data[count].players.all_players[playerCount].tag == playerTag) {
                                    playedAgent.src = data3.data[count].players.all_players[playerCount].assets.agent.small;
                
                                    var matchKDA = document.createElement("span");
                                    matchKDA.className = "match-kda-home";
                                    matchKDA.appendChild(document.createTextNode("KDA: " + data3.data[count].players.all_players[playerCount].stats.kills + "/" + data3.data[count].players.all_players[playerCount].stats.deaths + "/" + data3.data[count].players.all_players[playerCount].stats.assists))
                
                                    var matchStanding = document.createElement("div");
                                    var result = document.createElement("span");
                                    result.className = "result-header"
                                    result.appendChild(document.createTextNode("RESULT"))
                                    matchStanding.appendChild(result)
                                    if(data3.data[count].teams.red == null) {
                                        if(data3.data[count].players.all_players[playerCount].stats.kills == 40) {
                                            matchStanding.className = "match-result-won";
                                            matchStanding.appendChild(document.createTextNode("WIN"));
                                        } else {
                                            matchStanding.className = "match-result-lost";
                                            matchStanding.appendChild(document.createTextNode("LOSE"));
                                        }
                                    } else {
                                        if(data3.data[count].players.all_players[playerCount].team == "Blue") {
                                            if(data3.data[count].teams.blue.rounds_won == data3.data[count].teams.blue.rounds_lost) {
                                                matchStanding.className = "match-result-draw";
                                                matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                            } else {
                                                if(data3.data[count].teams.blue.has_won == false) {
                                                    matchStanding.className = "match-result-lost";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                                } else {
                                                    matchStanding.className = "match-result-won";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                                }
                                            }
                                        } else {
                                            if(data3.data[count].teams.blue.rounds_won == data3.data[count].teams.blue.rounds_lost) {
                                                matchStanding.className = "match-result-draw";
                                                matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                            } else {
                                                if(data3.data[count].teams.red.has_won == false) {
                                                    matchStanding.className = "match-result-lost";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.red.rounds_won + " : " + data3.data[count].teams.red.rounds_lost));
                                                } else {
                                                    matchStanding.className = "match-result-won";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.red.rounds_won + " : " + data3.data[count].teams.red.rounds_lost));
                                                }
                                            }
                                        }
                                    }
        
                                    //////////////////////////////////////////////////////////////////////
        
                                    sessionStorage.setItem(`addToTotal_score-${count}`, data3.data[count].players.all_players[playerCount].stats.score)
                                    sessionStorage.setItem(`addToTotal_kills-${count}`, data3.data[count].players.all_players[playerCount].stats.kills)
                                    sessionStorage.setItem(`addToTotal_deaths-${count}`, data3.data[count].players.all_players[playerCount].stats.deaths)
                                    sessionStorage.setItem(`addToTotal_assists-${count}`, data3.data[count].players.all_players[playerCount].stats.assists)
                                    sessionStorage.setItem(`addToTotal_dmg-${count}`, data3.data[count].players.all_players[playerCount].damage_made)
                                    var headshots_before = 0;
                                    var bodyshots_before = 0;
                                    var legshots_before = 0;
                                    for(var roundCount = 0; roundCount < data3.data[count].rounds.length; roundCount++) {
                                        for(var playerCount2 = 0; playerCount2 < data3.data[count].rounds[roundCount].player_stats.length; playerCount2++) {
                                            if(data3.data[count].rounds[roundCount].player_stats[playerCount2].player_display_name == playerName + "#" + playerTag) {
                                               headshots_before = headshots_before + parseInt(data3.data[count].rounds[roundCount].player_stats[playerCount2].headshots)
                                               bodyshots_before = bodyshots_before + parseInt(data3.data[count].rounds[roundCount].player_stats[playerCount2].bodyshots)
                                               legshots_before = legshots_before + parseInt(data3.data[count].rounds[roundCount].player_stats[playerCount2].legshots)
                                               break;
                                            } else {
                                                continue;
                                            }
                                        }
                                    }
                                    sessionStorage.setItem(`headshot-counter-${count}`, headshots_before)
                                    sessionStorage.setItem(`bodyshot-counter-${count}`, bodyshots_before)
                                    sessionStorage.setItem(`legshot-counter-${count}`, legshots_before)
                                } else {
                                    continue;
                                }
                            }
                
                            Matchcontainer.appendChild(playedAgent);
                            Matchcontainer.appendChild(matchmodeIcon);
                            Matchcontainer.appendChild(matchKDA);
                            Matchcontainer.appendChild(matchStanding);
                            Matchcontainer.appendChild(matchMap);
                            
                            var wrapper = document.getElementById("last-matches");
                            var nextElement = document.getElementById("lastElement");
                            wrapper.insertBefore(Matchcontainer, nextElement);
                                            
                            $('.loading-icon').fadeTo(150, 0)
                            setTimeout(function() {
                                $('.loading-icon').css("display", "none");
                                $('.loading-layer').css("opacity", "0");
                                $('.loading-layer').css("display", "block");
                                $('.loading-layer').fadeTo(150, 1)
                            }, 200)
                        }
                        var headshots_mid = 0;
                        var bodyshots_mid = 0;
                        var legshots_mid = 0;
                        for(var totalShotCount = 0; totalShotCount < 5; totalShotCount++) {
                            headshots_mid = headshots_mid + parseInt(sessionStorage.getItem(`headshot-counter-${totalShotCount}`))
                            bodyshots_mid = bodyshots_mid + parseInt(sessionStorage.getItem(`bodyshot-counter-${totalShotCount}`))
                            legshots_mid = legshots_mid + parseInt(sessionStorage.getItem(`legshot-counter-${totalShotCount}`))
                        }
                        var headshots_after = headshots_mid / 5;
                        var bodyshots_after = bodyshots_mid / 5;
                        var legshots_after = legshots_mid / 5;
                        var totalShotsHit = headshots_after + bodyshots_after + legshots_after;
                        $('.home-avg-headshots').empty()
                        $('.home-avg-bodyshots').empty()
                        $('.home-avg-legshots').empty()
                        $('#home-stats-header').empty()
                        $('.home-avg-headshots').append(" " + Math.floor((headshots_after / totalShotsHit) * 100) + "%")
                        $('.home-avg-bodyshots').append(" " + Math.floor((bodyshots_after / totalShotsHit) * 100) + "%")
                        $('.home-avg-legshots').append(" " + Math.floor((legshots_after / totalShotsHit) * 100) + "%")
                        $('#home-stats-header').append(`Stats of your last 5 Matches`)
    
                        var pKills_before = 0;
                        var pDeaths_before = 0;
                        var pAssists_before = 0;
                        var pScore_before = 0;
                        var pDmg_before = 0;
                        for(var count = 0; count < 5; count++) {
                            pScore_before = pScore_before + parseInt(sessionStorage.getItem(`addToTotal_score-${count}`))
                            pKills_before = pKills_before + parseInt(sessionStorage.getItem(`addToTotal_kills-${count}`))
                            pDeaths_before = pDeaths_before + parseInt(sessionStorage.getItem(`addToTotal_deaths-${count}`))
                            pAssists_before = pAssists_before + parseInt(sessionStorage.getItem(`addToTotal_assists-${count}`))
                            pDmg_before = pDmg_before + parseInt(sessionStorage.getItem(`addToTotal_dmg-${count}`))
                        }
                        var pKills_after = pKills_before / 5;
                        var pDeaths_after = pDeaths_before / 5;
                        var pAssists_after = pAssists_before / 5;
                        var pScore_after = pScore_before / 5;
                        var pDmg_after = pDmg_before / 5;
                
                        $('.home-avg-kda').empty()
                        $('.home-avg-score').empty()
                        $('.home-avg-dmg_match').empty()
                        $('.home-avg-kda').append(" " + Math.round(pKills_after) + "/" + Math.round(pDeaths_after) + "/" + Math.round(pAssists_after));
                        $('.home-avg-score').append(" " + pScore_after);
                        $('.home-avg-dmg_match').append(" " + pDmg_after + "HP");
    
                        let finishedData = {
                            preferredMatchFilter: filterType
                        };
                         
                        let data1 = JSON.stringify(finishedData);
                        fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/home/preferredMatchFilter.json', data1);
                
                        $.ajax({
                            dataType: "json",
                            url: `https://api.henrikdev.xyz/valorant/v1/mmr-history/eu/${playerName}/${playerTag}`,
                            type: 'get',
                            success: function(data, xhr) {
                                function ispositive(n){
                                    return 1/(n*0)===1/0
                                }
                                var RR_after = data.data[0].ranking_in_tier - data.data[4].ranking_in_tier;
                                if(ispositive(RR_after) == true) {
                                    $('.home-avg-rrchange').empty()
                                    $('.home-avg-rrchange').append(" +" + RR_after)
                                } else {
                                    $('.home-avg-rrchange').empty()
                                    $('.home-avg-rrchange').append("" + RR_after)
                                }
                            }
                        })
                    }
                });
            } else {
                $.ajax({
                    dataType: "json",
                    url: `https://api.henrikdev.xyz/valorant/v3/matches/eu/${playerName}/${playerTag}?filter=${filterType}`,
                    type: 'get',
                    success: function(data3, xhr) {
                        for(var count = 0; count < data3.data.length; count++) {
                
                            var Matchcontainer = document.createElement("div");
                            Matchcontainer.className = "home-matchtile";
                
                            var matchmodeIcon = document.createElement("img");
                            matchmodeIcon.className = "match-mode-icon-home";
                            var matchmode = data3.data[count].metadata.mode
                            if(matchmode == "Unrated" || matchmode == "Competitive" || matchmode == "Custom Game") {
                                matchmodeIcon.setAttribute("src", "./assets/img/standard.png")
                            } else {
                                matchmodeIcon.setAttribute("src", `./assets/img/${matchmode.toLowerCase()}.png`)
                            }
                
                            var matchMap = document.createElement("span");
                            matchMap.className = "match-map-home";
                            matchMap.appendChild(document.createTextNode(`Map: ${data3.data[count].metadata.map}`));
                
                            var playedAgent = document.createElement("img");
                            playedAgent.className = "match-played-agent-home";
                
                            for(var playerCount = 0; playerCount < data3.data[count].players.all_players.length; playerCount++) {
                                if(data3.data[count].players.all_players[playerCount].name == playerName && data3.data[count].players.all_players[playerCount].tag == playerTag) {
                                    playedAgent.src = data3.data[count].players.all_players[playerCount].assets.agent.small;
                
                                    var matchKDA = document.createElement("span");
                                    matchKDA.className = "match-kda-home";
                                    matchKDA.appendChild(document.createTextNode("KDA: " + data3.data[count].players.all_players[playerCount].stats.kills + "/" + data3.data[count].players.all_players[playerCount].stats.deaths + "/" + data3.data[count].players.all_players[playerCount].stats.assists))
                
                                    var matchStanding = document.createElement("div");
                                    var result = document.createElement("span");
                                    result.className = "result-header"
                                    result.appendChild(document.createTextNode("RESULT"))
                                    matchStanding.appendChild(result)
                                    if(data3.data[count].teams.red == null) {
                                        if(data3.data[count].players.all_players[playerCount].stats.kills == 40) {
                                            matchStanding.className = "match-result-won";
                                            matchStanding.appendChild(document.createTextNode("WIN"));
                                        } else {
                                            matchStanding.className = "match-result-lost";
                                            matchStanding.appendChild(document.createTextNode("LOSE"));
                                        }
                                    } else {
                                        if(data3.data[count].players.all_players[playerCount].team == "Blue") {
                                            if(data3.data[count].teams.blue.rounds_won == data3.data[count].teams.blue.rounds_lost) {
                                                matchStanding.className = "match-result-draw";
                                                matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                            } else {
                                                if(data3.data[count].teams.blue.has_won == false) {
                                                    matchStanding.className = "match-result-lost";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                                } else {
                                                    matchStanding.className = "match-result-won";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                                }
                                            }
                                        } else {
                                            if(data3.data[count].teams.blue.rounds_won == data3.data[count].teams.blue.rounds_lost) {
                                                matchStanding.className = "match-result-draw";
                                                matchStanding.appendChild(document.createTextNode(data3.data[count].teams.blue.rounds_won + " : " + data3.data[count].teams.blue.rounds_lost));
                                            } else {
                                                if(data3.data[count].teams.red.has_won == false) {
                                                    matchStanding.className = "match-result-lost";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.red.rounds_won + " : " + data3.data[count].teams.red.rounds_lost));
                                                } else {
                                                    matchStanding.className = "match-result-won";
                                                    matchStanding.appendChild(document.createTextNode(data3.data[count].teams.red.rounds_won + " : " + data3.data[count].teams.red.rounds_lost));
                                                }
                                            }
                                        }
                                    }
        
                                    //////////////////////////////////////////////////////////////////////
        
                                    sessionStorage.setItem(`addToTotal_score-${count}`, data3.data[count].players.all_players[playerCount].stats.score)
                                    sessionStorage.setItem(`addToTotal_kills-${count}`, data3.data[count].players.all_players[playerCount].stats.kills)
                                    sessionStorage.setItem(`addToTotal_deaths-${count}`, data3.data[count].players.all_players[playerCount].stats.deaths)
                                    sessionStorage.setItem(`addToTotal_assists-${count}`, data3.data[count].players.all_players[playerCount].stats.assists)
                                    sessionStorage.setItem(`addToTotal_dmg-${count}`, data3.data[count].players.all_players[playerCount].damage_made)
                                    var headshots_before = 0;
                                    var bodyshots_before = 0;
                                    var legshots_before = 0;
                                    for(var roundCount = 0; roundCount < data3.data[count].rounds.length; roundCount++) {
                                        for(var playerCount2 = 0; playerCount2 < data3.data[count].rounds[roundCount].player_stats.length; playerCount2++) {
                                            if(data3.data[count].rounds[roundCount].player_stats[playerCount2].player_display_name == playerName + "#" + playerTag) {
                                               headshots_before = headshots_before + parseInt(data3.data[count].rounds[roundCount].player_stats[playerCount2].headshots)
                                               bodyshots_before = bodyshots_before + parseInt(data3.data[count].rounds[roundCount].player_stats[playerCount2].bodyshots)
                                               legshots_before = legshots_before + parseInt(data3.data[count].rounds[roundCount].player_stats[playerCount2].legshots)
                                               break;
                                            } else {
                                                continue;
                                            }
                                        }
                                    }
                                    sessionStorage.setItem(`headshot-counter-${count}`, headshots_before)
                                    sessionStorage.setItem(`bodyshot-counter-${count}`, bodyshots_before)
                                    sessionStorage.setItem(`legshot-counter-${count}`, legshots_before)
                                } else {
                                    continue;
                                }
                            }
                
                            Matchcontainer.appendChild(playedAgent);
                            Matchcontainer.appendChild(matchmodeIcon);
                            Matchcontainer.appendChild(matchKDA);
                            Matchcontainer.appendChild(matchStanding);
                            Matchcontainer.appendChild(matchMap);
                            
                            var wrapper = document.getElementById("last-matches");
                            var nextElement = document.getElementById("lastElement");
                            wrapper.insertBefore(Matchcontainer, nextElement);
                                            
                            $('.loading-icon').fadeTo(150, 0)
                            setTimeout(function() {
                                $('.loading-icon').css("display", "none");
                                $('.loading-layer').css("opacity", "0");
                                $('.loading-layer').css("display", "block");
                                $('.loading-layer').fadeTo(150, 1)
                            }, 200)
                        }
                        var headshots_mid = 0;
                        var bodyshots_mid = 0;
                        var legshots_mid = 0;
                        for(var totalShotCount = 0; totalShotCount < 5; totalShotCount++) {
                            headshots_mid = headshots_mid + parseInt(sessionStorage.getItem(`headshot-counter-${totalShotCount}`))
                            bodyshots_mid = bodyshots_mid + parseInt(sessionStorage.getItem(`bodyshot-counter-${totalShotCount}`))
                            legshots_mid = legshots_mid + parseInt(sessionStorage.getItem(`legshot-counter-${totalShotCount}`))
                        }
                        var headshots_after = headshots_mid / 5;
                        var bodyshots_after = bodyshots_mid / 5;
                        var legshots_after = legshots_mid / 5;
                        var totalShotsHit = headshots_after + bodyshots_after + legshots_after;
                        $('.home-avg-headshots').empty()
                        $('.home-avg-bodyshots').empty()
                        $('.home-avg-legshots').empty()
                        $('#home-stats-header').empty()
                        $('.home-avg-headshots').append(" " + Math.floor((headshots_after / totalShotsHit) * 100) + "%")
                        $('.home-avg-bodyshots').append(" " + Math.floor((bodyshots_after / totalShotsHit) * 100) + "%")
                        $('.home-avg-legshots').append(" " + Math.floor((legshots_after / totalShotsHit) * 100) + "%")
                        let titleCase = filterType[0].toUpperCase() + filterType.substr(1);
                        $('#home-stats-header').append(`Stats of your last 5 ${titleCase} Matches`)
    
                        var pKills_before = 0;
                        var pDeaths_before = 0;
                        var pAssists_before = 0;
                        var pScore_before = 0;
                        var pDmg_before = 0;
                        for(var count = 0; count < 5; count++) {
                            pScore_before = pScore_before + parseInt(sessionStorage.getItem(`addToTotal_score-${count}`))
                            pKills_before = pKills_before + parseInt(sessionStorage.getItem(`addToTotal_kills-${count}`))
                            pDeaths_before = pDeaths_before + parseInt(sessionStorage.getItem(`addToTotal_deaths-${count}`))
                            pAssists_before = pAssists_before + parseInt(sessionStorage.getItem(`addToTotal_assists-${count}`))
                            pDmg_before = pDmg_before + parseInt(sessionStorage.getItem(`addToTotal_dmg-${count}`))
                        }
                        var pKills_after = pKills_before / 5;
                        var pDeaths_after = pDeaths_before / 5;
                        var pAssists_after = pAssists_before / 5;
                        var pScore_after = pScore_before / 5;
                        var pDmg_after = pDmg_before / 5;
                
                        $('.home-avg-kda').empty()
                        $('.home-avg-score').empty()
                        $('.home-avg-dmg_match').empty()
                        $('.home-avg-kda').append(" " + Math.round(pKills_after) + "/" + Math.round(pDeaths_after) + "/" + Math.round(pAssists_after));
                        $('.home-avg-score').append(" " + pScore_after);
                        $('.home-avg-dmg_match').append(" " + pDmg_after + "HP");
    
                        let finishedData = {
                            preferredMatchFilter: filterType
                        };
                         
                        let data1 = JSON.stringify(finishedData);
                        fs.writeFileSync(process.env.APPDATA + '/VALTracker/settings/home/preferredMatchFilter.json', data1);
                
                        $.ajax({
                            dataType: "json",
                            url: `https://api.henrikdev.xyz/valorant/v1/mmr-history/eu/${playerName}/${playerTag}`,
                            type: 'get',
                            success: function(data, xhr) {
                                function ispositive(n){
                                    return 1/(n*0)===1/0
                                }
                                var RR_after = data.data[0].ranking_in_tier - data.data[4].ranking_in_tier;
                                if(ispositive(RR_after) == true) {
                                    $('.home-avg-rrchange').empty()
                                    $('.home-avg-rrchange').append(" +" + RR_after)
                                } else {
                                    $('.home-avg-rrchange').empty()
                                    $('.home-avg-rrchange').append("" + RR_after)
                                }
                            }
                        })
                    }
                });
            }
        });
    }, 600)
});