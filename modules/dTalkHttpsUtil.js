var request = require('request');

var oapiHost = 'https://oapi.dingtalk.com';

module.exports = {
    // get json数据
    get: function(path, cb) {
        var options = {
            method: 'GET',
            url: oapiHost + path,
            json: true
        };

        request(options, function(err, response, body) {

            if (err) {
                cb(err);
            } else {
                if (body && 0 === body.errcode) {
                    cb(null, body);
                } else {
                    cb({ errcode: body.errcode, errmsg: body.errmsg });
                }
            }
        });

    },
    // post json数据
    post: function(path, data, cb) {
        var options = {
            method: 'POST',
            url: oapiHost + path,
            json: data
        };

        request(options, function(err, response, body) {
            if (err) {
                cb(err);
            } else {
                if (body && 0 === body.errcode) {
                    cb(null, body);
                } else {
                    cb({ errcode: body.errcode, errmsg: body.errmsg });
                }
            }
        });

    }
}
