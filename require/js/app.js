require.config({

 	paths: {

        appframework: 'appframework',
        appframeworkui: 'ui/appframework.ui'

        },

    shim: {

    	'appframework':{

    		exports: '$'

    	},

    	'appframework.ui':{

    		exports: '$.ui'

    	}

    },

    waitseconds: 10

});

require(['main'], function(main){

    

});
