'use strict';

const request = require('request');

module.exports = function(Userinfo) {
    delete Userinfo.validations.email;

    Userinfo.addChallenge = (challengeId, userId, cb) => {
        Userinfo.findById(userId).then( res => {
            
            let curr = res.currentChallenge.findIndex( value => value == challengeId);
            let fin = res.finishedChallenges.findIndex( value => value == challengeId);

            if(curr == -1 && fin == -1) {
                //res.currentChallenge = [...res.currentChallenge, challengeId];
                //res.save();
                let newArr = res.currentChallenge;
                newArr.push(challengeId);
                console.log(newArr);
                res.updateAttributes({currentChallenge: newArr});
                console.log(res);
            }
        })
        cb(null, "kek");
    }

    Userinfo.remoteMethod("addChallenge", {
        http: { verb: "GET" },
        accepts: [{arg: 'challengeId', type: 'string'}, { arg: "userId", type: "string" }],
        returns: {arg: 'ok', type: 'string'}
    });

    Userinfo.verifyChallenge = (challengeId, userId, hack, verification, cb) => {
        
        Userinfo.app.models.Challenges.findById(challengeId).then(res => {
            if(res.verify == "question") {
                let ok = true;
                console.log(res.questions);
                res.questions.forEach( (value, key) => {
                    console.log(value.answer, verification[key]);
                    if(value.answer != verification[key]) {
                        ok = false;
                    }
                });
                if(ok) {
                    Userinfo.findById(userId).then(user => {
                        let arr = user.finishedChallenges;
                        let arr2 = user.currentChallenge;
                        arr2 = arr2.filter( val => val != res.id);
                        arr.push(res.id);
                        user.updateAttributes({
                            finishedChallenges: arr,
                            exp: user.exp + res.exp,
                            currentChallenge: arr2
                        });
                    }); 
                    cb(null, "true")
                } else cb(null, "false");
            } else if(res.verify == "hack") {
                request("http://127.0.0.1:4444/?username=" + hack, function(error, response, body){
                    if(!error) {
                        console.log(body);
                        if(parseInt(body) > 10) {
                            Userinfo.findById(userId).then(user => {
                                let arr = user.finishedChallenges;
                                let arr2 = user.currentChallenge;
                                arr2 = arr2.filter( val => val != res.id);
                                arr.push(res.id);
                                user.updateAttributes({
                                    finishedChallenges: arr,
                                    exp: user.exp + res.exp,
                                    currentChallenge: arr2
                                });
                            }); 
                        }
                    }
                })
            
            } else cb(null, "false");
        })       
    }

    Userinfo.remoteMethod("verifyChallenge", {
        http: { verb: "GET" },
        accepts: [{arg: "challengeId", type: 'string'}, { arg: "userId", type: "string" }, { arg: "hack", type: "string" }, {arg:"verification", type:"any"}],
        returns: {arg: 'ok', type: 'string'}
    })
};
