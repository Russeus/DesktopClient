$(document).ready(() => {
    let rawdata = fs.readFileSync(process.env.APPDATA + '/VALTracker/settings/userData.json');
    let dataToRead = JSON.parse(rawdata);

    var playerName = dataToRead.playerName
    var playerTag = dataToRead.playerTag
    $('#sec').css("display", "none")
    setTimeout(function() {
        if(sessionStorage.getItem("afterReload")) {
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
                    setTimeout(function() {
                        $('.loading-div-home').fadeTo(950, 0)
                        $('#sec').css("opacity", "0")
                        $('#sec').css("display", "block")
                        $('#sec').fadeTo(950, 1)
                        setTimeout(function() {
                            $('.loading-div-home').css("display", "none")
                        }, 1000)
                    }, 1000)
                }
            })
        } else {
            setTimeout(function() {
                sessionStorage.setItem("afterReload", true)
                window.location.href = ""
            }, 1500)
        }
    }, 750)
})