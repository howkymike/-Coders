'use strict';

module.exports = function(Challenges) {
    Challenges.addChallenge = (form, cb) => {
        let kek = JSON.parse(form);
        
        Challenges.create(kek).then(res => {
            console.log(res);
        })
        cb(null, "kek");
    }

    Challenges.remoteMethod("addChallenge", {
        http: { verb: "GET" },
        accepts: [{arg: 'form', type: 'string'}],
        returns: {arg: 'ok', type: 'string'}
    });

};
