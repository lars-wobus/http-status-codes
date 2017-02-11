var fs = require('fs');
var assert = require('assert');

var file = "../httpStatusCodes.json";

describe("Check: " + file, function() {

    it("Does file exist?", function() {
        assert(fs.existsSync(file), "File does not exist: " + file);
    });

    it("Can file be parsed?", function() {
        try
        {
            var obj = require(file);
            assert.ok(true);
        }
        catch(err)
        {
            assert.ok(false, err);
        }
    });

    try{
        var obj = require(file);

        Object.keys(obj).forEach(function(key)
        {
            it("Is object key '" + key + "' a number?", function() {
                assert((typeof obj[key] == "number"), "Type was: " + (typeof key));
            });                
        });
    }
    catch(err)
    {
        console.error("Skip testing if object only contains numbers");
    }
});