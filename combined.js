"use strict";

function importScripts() {
}

var self = {};

self.addEventListener = function(name, func) {
    self.assemblerInterface = func;
};// example python line to get encoding mapping
// ''.join(map(chr, range(256))).decode('koi8-r', 'replace')
"use strict";
var
  encodings = {
    'koi8-r': '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\u2500\u2502\u250c\u2510\u2514\u2518\u251c\u2524\u252c\u2534\u253c\u2580\u2584\u2588\u258c\u2590\u2591\u2592\u2593\u2320\u25a0\u2219\u221a\u2248\u2264\u2265\xa0\u2321\xb0\xb2\xb7\xf7\u2550\u2551\u2552\u0451\u2553\u2554\u2555\u2556\u2557\u2558\u2559\u255a\u255b\u255c\u255d\u255e\u255f\u2560\u2561\u0401\u2562\u2563\u2564\u2565\u2566\u2567\u2568\u2569\u256a\u256b\u256c\xa9\u044e\u0430\u0431\u0446\u0434\u0435\u0444\u0433\u0445\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u044f\u0440\u0441\u0442\u0443\u0436\u0432\u044c\u044b\u0437\u0448\u044d\u0449\u0447\u044a\u042e\u0410\u0411\u0426\u0414\u0415\u0424\u0413\u0425\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u042f\u0420\u0421\u0422\u0423\u0416\u0412\u042c\u042b\u0417\u0428\u042d\u0429\u0427\u042a',
	'koi8-u': '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\u2500\u2502\u250c\u2510\u2514\u2518\u251c\u2524\u252c\u2534\u253c\u2580\u2584\u2588\u258c\u2590\u2591\u2592\u2593\u2320\u25a0\u2219\u221a\u2248\u2264\u2265\xa0\u2321\xb0\xb2\xb7\xf7\u2550\u2551\u2552\u0451\u0454\u2554\u0456\u0457\u2557\u2558\u2559\u255a\u255b\u0491\u255d\u255e\u255f\u2560\u2561\u0401\u0404\u2563\u0406\u0407\u2566\u2567\u2568\u2569\u256a\u0490\u256c\xa9\u044e\u0430\u0431\u0446\u0434\u0435\u0444\u0433\u0445\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u044f\u0440\u0441\u0442\u0443\u0436\u0432\u044c\u044b\u0437\u0448\u044d\u0449\u0447\u044a\u042e\u0410\u0411\u0426\u0414\u0415\u0424\u0413\u0425\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u042f\u0420\u0421\u0422\u0423\u0416\u0412\u042c\u042b\u0417\u0428\u042d\u0429\u0427\u042a',
	'cp866': '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\u0410\u0411\u0412\u0413\u0414\u0415\u0416\u0417\u0418\u0419\u041a\u041b\u041c\u041d\u041e\u041f\u0420\u0421\u0422\u0423\u0424\u0425\u0426\u0427\u0428\u0429\u042a\u042b\u042c\u042d\u042e\u042f\u0430\u0431\u0432\u0433\u0434\u0435\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u2591\u2592\u2593\u2502\u2524\u2561\u2562\u2556\u2555\u2563\u2551\u2557\u255d\u255c\u255b\u2510\u2514\u2534\u252c\u251c\u2500\u253c\u255e\u255f\u255a\u2554\u2569\u2566\u2560\u2550\u256c\u2567\u2568\u2564\u2565\u2559\u2558\u2552\u2553\u256b\u256a\u2518\u250c\u2588\u2584\u258c\u2590\u2580\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f\u0401\u0451\u0404\u0454\u0407\u0457\u040e\u045e\xb0\u2219\xb7\u221a\u2116\xa4\u25a0\xa0',
	'latin1': '\x00\x01\x02\x03\x04\x05\x06\x07\x08\t\n\x0b\x0c\r\x0e\x0f\x10\x11\x12\x13\x14\x15\x16\x17\x18\x19\x1a\x1b\x1c\x1d\x1e\x1f !"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~\x7f\x80\x81\x82\x83\x84\x85\x86\x87\x88\x89\x8a\x8b\x8c\x8d\x8e\x8f\x90\x91\x92\x93\x94\x95\x96\x97\x98\x99\x9a\x9b\x9c\x9d\x9e\x9f\xa0\xa1\xa2\xa3\xa4\xa5\xa6\xa7\xa8\xa9\xaa\xab\xac\xad\xae\xaf\xb0\xb1\xb2\xb3\xb4\xb5\xb6\xb7\xb8\xb9\xba\xbb\xbc\xbd\xbe\xbf\xc0\xc1\xc2\xc3\xc4\xc5\xc6\xc7\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\xd0\xd1\xd2\xd3\xd4\xd5\xd6\xd7\xd8\xd9\xda\xdb\xdc\xdd\xde\xdf\xe0\xe1\xe2\xe3\xe4\xe5\xe6\xe7\xe8\xe9\xea\xeb\xec\xed\xee\xef\xf0\xf1\xf2\xf3\xf4\xf5\xf6\xf7\xf8\xf9\xfa\xfb\xfc\xfd\xfe\xff'
  };

function toEncoding(str, encoding) {
  var table = encodings[encoding];
  var strlen = str.length;
  var encoded = new Array(strlen);
  for (var i = 0; i < strlen; i++) {
  	var c = table.indexOf(str.charAt(i));
	if (c === null) c = 255;
	encoded[i] = String.fromCharCode(c);
  }
  return encoded.join('');
}

function Util() {
}

Util.char8 = function(val) {
    if (val > 32 && val < 127) return String.fromCharCode(val);
    return '.';
};

Util.hex8 = function(val) {
    if (val < 0 || val > 255)  return "??";

    var hexstr = "0123456789ABCDEF";
    return hexstr[(val & 0xf0) >> 4] + hexstr[val & 0x0f];
};

Util.hex16 = function(val) {
    return Util.hex8((val & 0xff00) >> 8) + Util.hex8(val & 0x00ff);
};

Util.isWhitespace = function(c) {
    return c=='\t' || c == ' ';// this is too slow c.match(/\s/);
};

Util.toTargetEncoding = function(str, encoding) {
    return toEncoding(str, encoding);
};

Util.replaceExt = function(path, newext) {
    if (path.indexOf('.') === -1) {
        return path + newext;
    }
    return path.split('.').slice(0, -1).join('.') + newext;
}

Util.formatGutterBrief = function(addr, bytes)
{
    var width = 0;
    var hexes = " ";

    if (bytes.length > 0) {
        hexes = Util.hex16(addr) + "  ";
        var len = bytes.length > 4 ? 4 : bytes.length;
        for (let b = 0; b < len; b++) {
            hexes += Util.hex8(bytes[b]) + ' ';
            width += 3;
        }

        if (len < bytes.length) {
            // append ellipses if hex is too long for the gutter
            hexes += "…";
            width += 2; 
        }
        hexes += "                ".substring(width);
    }

    return hexes;
}

Util.formatGutterFull = function(addr, bytes)
{
    var hexes = "";
    var chars = "";

    if (bytes.length > 0) {
        var len = Math.floor((bytes.length + 15)/16) * 16;
        
        for (let b = 0; b < len; b++) {
            if ((b % 16) === 0) {
                hexes += Util.hex16(addr + b) + "  ";
                chars = "";
            }
            var ht = b < bytes.length ?
                Util.hex8(bytes[b]) : '  '; 
            hexes += ht + (b%16==7?'-':' ');

            chars += b < bytes.length ?
                Util.char8(bytes[b]) : ' ';

            if (((b + 1) % 16) === 0) {
                hexes += "  " + chars;
                hexes += "<br/>";
            }
        }
    }

    return hexes;
}

// Microsoft Edge compatibility polyfill
// https://github.com/KhaledElAnsari/String.prototype.trimStart
String.prototype.trimStart = String.prototype.trimStart ? String.prototype.trimStart : function() {
    if(String.prototype.trimLeft) {
        return this.trimLeft();
    } else if(String.prototype.trim) {
        var trimmed = this.trim();
        var indexOfWord = this.indexOf(trimmed);

        return this.slice(indexOfWord, this.length);
    }
};
/* Tape stuff */

var TapeFormat = function(fmt, forfile) {
    this.format = null;
    this.variant = null;
    this.speed = 12;
    this.forfile = forfile || false; /* true if no leaders, no sync bytes */
    switch (fmt) {
        case 'rk-bin':
        case 'rk86-bin':
        case '86rk-bin':
            this.format = TapeFormat.prototype.nekrosha;
            this.variant = 'rk';
            this.speed = 12;
            break;
        case 'mikrosha-bin':
        case 'microsha-bin':
        case 'microcha-bin':
        case 'necrosha-bin':
        case 'nekrosha-bin':
        case 'necro-bin':
        case 'nekro-bin':
            this.format = TapeFormat.prototype.nekrosha;
            this.variant = 'mikrosha';
            this.speed = 12;
            break;
        case 'partner-bin':
            this.format = TapeFormat.prototype.nekrosha;
            this.variant = 'rk';
            this.speed = 8;
            break;
        case 'v06c-rom':
            this.format = TapeFormat.prototype.v06c_rom;
            this.speed = 5;
            break;
        case 'krista-rom':
            this.format = TapeFormat.prototype.krista;
            this.speed = 8;
            break;
        case 'ÓÐÅÃÉÁÌÉÓÔß-rks': // кои-8 факъ е
        case 'spetsialist-rks':
        case 'specialist-rks':
        case 'spec-rks':
            this.format = TapeFormat.prototype.specialist;
            this.speed = 9;
            this.variant = null;
            break;
        case 'ÓÐÅÃÉÁÌÉÓÔß-mon': // кои-8 факъ е
        case 'spetsialist-mon':
        case 'specialist-mon':
        case 'spec-mon':
            this.format = TapeFormat.prototype.specialist;
            this.speed = 9;
            this.variant = "name-header";
            break;
    }
    this.makewav = TapeFormat.prototype.makewav;
    return this;
}

/* 
 * Элемент  Размер, байт 
 * Ракорд (нулевые байты)   256 
 * Синхробайт (E6h)         1 
 * Начальный адрес в ОЗУ    2 
 * Конечный адрес в ОЗУ     2 
 * Данные   (конечный адрес - начальный адрес + 1) 
 * Ракорд (нулевые байты)   2 
 * Синхробайт (E6h)         1 
 * Контрольная сумма        2 
 * 0 0 0 0 0 svo: pad with some zeroes in the end
 */
TapeFormat.prototype.nekrosha = function(mem, org, name) {
    var data = new Uint8Array(mem.length + 266 + 5);

    // rk-style checksum
    var cs_hi = 0;
    var cs_lo = 0;

    // microsha-style checksum
    var csm_hi = 0;
    var csm_lo = 0;

    var dptr = 0;
    if (!this.forfile) {
        for (var i = 0; i < 256; ++i) {
            data[dptr++] = 0;
        }
        data[dptr++] = 0xe6;
    }

    data[dptr++] = (org >> 8) & 0xff;
    data[dptr++] = org & 0xff;
    data[dptr++] = ((org + mem.length - 1) >> 8) & 0xff;
    data[dptr++] = (org + mem.length - 1) & 0xff;

    for (var i = 0; i < mem.length; ++i) {
        let octet = mem[i];
        data[dptr++] = octet;
        cs_lo += octet;
        if (i < mem.length - 1) {
            cs_hi += octet + ((cs_lo >> 8) & 0xff);
        }
        cs_lo &= 0xff;

        if (i % 2 === 0) {
            csm_lo ^= octet;
        } else {
            csm_hi ^= octet;
        }
    }

    console.log('checksum rk=', Util.hex8(cs_hi&0xff), Util.hex8(cs_lo&0xff));
    console.log('checksum microsha=', Util.hex8(csm_hi&0xff), 
            Util.hex8(csm_lo&0xff));

    if (this.variant === 'mikrosha') {
        data[dptr++] = csm_hi & 0xff;
        data[dptr++] = csm_lo & 0xff;
    } else {
        data[dptr++] = 0;
        data[dptr++] = 0;
    }
    data[dptr++] = 0xe6;

    /* rk86 checksum */
    data[dptr++] = cs_hi & 0xff;
    data[dptr++] = cs_lo & 0xff;
    var end = dptr;
    data[dptr++] = 0;
    data[dptr++] = 0;
    data[dptr++] = 0;
    data[dptr++] = 0;
    data[dptr++] = 0;
    if (this.forfile) {
        this.data = data.slice(0, end);
    } else {
        this.data = data;
    }
    return this;
};

TapeFormat.prototype.makewav = function()
{
    var encoded = TapeFormat.prototype.biphase(this.data, this.speed || 12);
    var params = {sampleRate:22050, channels: 1};
    wav = new Wav(params);
    wav.setBuffer(encoded);
    var stream = wav.getBuffer(encoded.length);
    return stream;
}

TapeFormat.prototype.biphase = function(data, halfperiod) {
    var w = new Uint8Array(data.length * 8 * 2 * halfperiod);
    const period = halfperiod * 2;
    var dptr = 0;
    for (var i = 0, end = data.length; i < end; i += 1) {
        let octet = data[i];
        for (var b = 0; b < 8; ++b, octet <<= 1) {
            //let phase = (octet & 0200) ? -128 : 127;
            let phase = (octet & 0x80) ? 32 : (255 - 32);
            for (var q = 0; q < halfperiod; ++q) w[dptr++] = phase;
            phase = phase ^ 255;
            for (var q = 0; q < halfperiod; ++q) w[dptr++] = phase;
        }
    }
    return w;
};

/* 4[ 25[00] 25[55] ]  record preamble
 * 16[00]   block preamble
 *  4[55] [E6] 
 *      4[00] 25[filename] 2[00]  [hi(addr)] [block count] [block number] [cs0]
 *  4[00] [E6]
 *      [80] [cs0] 
 *      32[data] [checksum_data]
 *  4[00] [E6]
 *      [81] [cs0]
 *      32[data] [checksum_data]
 *   . . .
 *  4[00] [E6]
 *      [87] [cs0]
 *      32[data] [checksum_data]
 *
 * Sizes: 
 *      record preamble                 =200
 *
 *      one block:
 *          preamble             16
 *          name:                40
 *          data:                40 x 8
 *          total:                      =376
 *      N_blocks = (data size + 255) / 256
 *      Grand Total                     =200 + N_blocks * 376 + end padding 8
 */
TapeFormat.prototype.v06c_rom = function(mem, org, name) {
    var nblocks = Math.trunc((mem.length + 255) / 256);
    var data = new Uint8Array(200 + nblocks * 376 + 64);
    var dofs = 0;
    var sofs = 0;
    /* Preamble */
    for (var i = 0; i < 200; ++i) {
        data[dofs++] = ((Math.trunc(i / 25) % 2) === 0) ? 0x00 : 0x55;
    }

    /* Blocks */
    for (var block = 0; block < nblocks; ++block) {
        /* Checksum of the name subbbbblock */
        var cs0 = 0;

        /* Block preamble */
        for (var i = 0; i < 16; ++i) data[dofs++] = 0;  
        /* Name subblock id */
        for (var i = 0; i < 4; ++i) data[dofs++] = 0x55; 
        data[dofs++] = 0xE6;
        for (var i = 0; i < 4; ++i) data[dofs++] = 0x00;
        /* Name */
        for (var i = 0; i < 25; ++i) {
            cs0 += data[dofs++] = i < name.length ? name.charCodeAt(i) : 0x20;
        }
        data[dofs++] = data[dofs++] = 0; 
        /* High nibble of org address */
        cs0 += data[dofs++] = 0xff & (org >> 8); /* TODO: fix misaligned org */
        /* Block count */
        cs0 += data[dofs++] = nblocks;
        /* Block number */
        cs0 += data[dofs++] = nblocks - block;
        data[dofs++] = cs0 & 0xff;

        /* Now the actual data: 8x32 octets */
        for (var sblk = 0x80; sblk < 0x88; ++sblk) {
            var cs = 0;
            for (var i = 0; i < 4; ++i) data[dofs++] = 0x00;
            data[dofs++] = 0xE6;
            cs += data[dofs++] = sblk;
            cs += data[dofs++] = cs0;
            for (var i = 0; i < 32; ++i) {
                cs += data[dofs++] = sofs < mem.length ? mem[sofs++] : 0;
            }
            data[dofs++] = 0xff & cs;
        }
    }
    this.data = data;
    return this;
};

/* Krista: Vector-06c ugly sister.
 *
 * 256[55]
 */
TapeFormat.prototype.krista = function(mem, org, name) {
    var nblocks = Math.trunc((mem.length + 255) / 256);
    var data = new Uint8Array(200 + nblocks * 376 + 64);
    var dofs = 0;
    var sofs = 0;
    /* Preamble */
    for (var i = 0; i < 200; ++i) {
        data[dofs++] = ((Math.trunc(i / 25) % 2) === 0) ? 0x00 : 0x55;
    }

    var cs = 0;
    /* Header block */
    data[dofs++] = 0xe6;
    data[dofs++] = 0xff;
    var startblock = 0xff & (org >> 8);
    cs = data[dofs++] = startblock;
    cs += data[dofs++] = 0xff & (startblock + nblocks);
    data[dofs++] = cs;
    //data[dofs++] = data[dofs++] = 0;
    
    /* Blocks */
    for (var block = startblock; block < startblock + nblocks; ++block) {
        cs = 0;

        /* Block preamble */
        for (var i = 0; i < 16; ++i) data[dofs++] = 0x55;  
        data[dofs++] = 0xE6;
        data[dofs++] = block; /* hi byte of block address */
        data[dofs++] = 0;     /* low byte of block address */
        data[dofs++] = 0;     /* payload size + 1 */
        
        /* Data: 256 octets */
        for (var i = 0; i < 256; ++i) {
            cs += data[dofs++] = sofs < mem.length ? mem[sofs++] : 0;
        }
        data[dofs++] = 0xff & cs;
    }
    this.data = data.slice(0, dofs + 16);
    return this;
};

/* Специалистъ: 
 * <RAKK_256>,0E6H,0D9H,0D9H,0D9H,<ASCII_NAME>,
 * <RAKK_768>,0E6H,<ADR_BEG>,<ADR_END>,<BIN_CODE>,<CHECK_SUM>
 */
TapeFormat.prototype.specialist = function(mem, org, name) {
    var data = new Uint8Array(mem.length + 1024 + 32 + name.length);

    // rk-style checksum
    var cs_hi = 0;
    var cs_lo = 0;

    var dptr = 0;
    if (!this.forfile) {
        if (this.variant === "name-header") {
            for (var i = 0; i < 256; ++i) {
                data[dptr++] = 0;
            }
            data[dptr++] = 0xe6;
            data[dptr++] = 0xd9;
            data[dptr++] = 0xd9;
            data[dptr++] = 0xd9;

            for (var i = 0; i < name.length; ++i) {
                data[dptr++] = name.charCodeAt(i);
            }
        }
        
        for (var i = 0; i < 768; ++i) {
            data[dptr++] = 0;
        }
        data[dptr++] = 0xe6;
    }

    // same as .rk but little endian
    data[dptr++] = org & 0xff;
    data[dptr++] = (org >> 8) & 0xff;
    data[dptr++] = (org + mem.length - 1) & 0xff;
    data[dptr++] = ((org + mem.length - 1) >> 8) & 0xff;

    for (var i = 0; i < mem.length; ++i) {
        let octet = mem[i];
        data[dptr++] = octet;
        cs_lo += octet;
        if (i < mem.length - 1) {
            cs_hi += octet + ((cs_lo >> 8) & 0xff);
        }
        cs_lo &= 0xff;
    }

    console.log('checksum=', Util.hex8(cs_hi&0xff), Util.hex8(cs_lo&0xff));

    /* rk86 checksum */
    data[dptr++] = cs_lo & 0xff;
    data[dptr++] = cs_hi & 0xff;

    var end = dptr;

    for (var i = dptr; i < mem.length; ++i) {
        mem[i] = 0;
    }

    if (this.forfile) {
        this.data = data.slice(0, end);
    } else {
        this.data = data;
    }

    return this;
};
/*jshint sub:true*/ 		// object['prop'] is ok 
/*jshint evil: true */ 		// eval is okay
/*globals self: false */ 	// self is defined by worker scope

"use strict";
//
// Pretty 8080 Assembler
// 
// Send comments to svofski at gmail dit com 
// 
// Copyright (c) 2009 Viacheslav Slavinsky
// 
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
// 
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
// 
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
//
//
// Translation help:
// Leonid Kirillov, Alexander Timoshenko, Upi Tamminen,
// Cristopher Green, Nard Awater, Ali Asadzadeh,
// Guillermo S. Romero, Anna Merkulova, Stephan Henningsen
// 
// Revison Log
// Rev.A: Initial release
// Rev.B: A lot of fixes to compile TINIDISK.ASM by Dr. Li-Chen Wang
// Rev.C: Performance optimizations and cleanup, labels->hash
// Rev.D: More syntax fixes; opera navigation and Back Button Toolbar
// Rev.E: Navigation to label references (backref menu)
//        Nice labels table
//        Some Opera-related fixes
// Rev.F: fixed '.' and semi-colon in db
//        tab scroll fixed
// Rev.G: $ can now work as hex prefix
// Rev.H: Fixed spaces in reg-reg, .binfile, .hexfile
// Rev.I: Fixed bug in evaluation of hex literals ending with d
// Rev.J: Backport from offline version: register highlighting
// Rev.K: Target encodings support
//
// TODO: evaluation should ignore precedence, it's all left-to-right
//
// -- all of the above is kept for historical reasons only --

importScripts('encodings.js');
importScripts('util.js');
importScripts('tape.js');

function Assembler() {
    this.debug = false;
    this.tapeFormat = 'rk-bin';
    this.doHexDump = false;
    this.doIntelHex = false;
    this.targetEncoding = 'koi8-r';
    this.project = "test";


    this.labels = {};
    this.xref = {};
    this.mem = [];
    this.org = undefined;
    this.textlabels= [];
    this.references = [];
    this.errors = [];
    this.gutterContent = [];
}

Assembler.prototype.getBinFileName = function()
{
    if (this.project.indexOf('.') === -1) {
        return this.project + '.bin';
    }
    else {
        return this.project;
    }
}

Assembler.prototype.getHexFileName = function()
{
    if (this.project.indexOf('.') === -1) {
        return this.project + '.hex';
    }
    else {
        return Util.replaceExt(this.project, '.hex');
    }
}

Assembler.prototype.getTapFileName = function()
{
    if (this.project.indexOf('.') === -1) {
        return this.project + '.cas';
    }
    else {
        return Util.replaceExt(this.project, '.cas');
    }
}



// -- utility stuffs --
Assembler.rpmap = {"h":"l", "d":"e"};

// -- Assembler --

Assembler.ops0 = {
    "nop":  0x00,
    "hlt":	0x76,
    "ei":	0xfb,
    "di":	0xf3,
    "sphl":	0xf9,
    "xchg":	0xeb,
    "xthl":	0xe3,
    "daa":	0x27,
    "cma":	0x2f,
    "stc":	0x37,
    "cmc":	0x3f,
    "rlc":	0x07,
    "rrc":	0x0f,
    "ral":	0x17,
    "rar":	0x1f,
    "pchl":	0xe9,
    "ret":	0xc9,
    "rnz":	0xc0,
    "rz":	0xc8,
    "rnc":	0xd0,
    "rc":	0xd8,
    "rpo":	0xe0,
    "rpe":	0xe8,
    "rp":	0xf0,
    "rm":	0xf8,
};

Assembler.opsIm16 = {
    "lda":	0x3a,
    "sta":	0x32,
    "lhld":	0x2a,
    "shld":	0x22,
    "jmp":	0xc3,
    "jnz":	0xc2,
    "jz":	0xca,
    "jnc":	0xd2,
    "jc":	0xda,
    "jpo":	0xe2,
    "jpe":	0xea,
    "jp":	0xf2,
    "jm":	0xfa,
    "call":	0xcd,
    "cnz":	0xc4,
    "cz":	0xcc,
    "cnc":	0xd4,
    "cc":	0xdc,
    "cpo":	0xe4,
    "cpe":	0xec,
    "cp":	0xf4,
    "cm":	0xfc,
};

// lxi rp, im16
Assembler.opsRpIm16 = {
    "lxi":	"01"	// 00rp0001, bc=00, de=01,hl=10, sp=11
};

// adi 33, out 10
Assembler.opsIm8 = {
    "adi": 	0xc6,
    "aci": 	0xce,
    "sui":	0xd6,
    "sbi":	0xde,
    "ani":	0xe6,
    "xri":	0xee,
    "ori":	0xf6,
    "cpi":	0xfe,
    "in":	0xdb,
    "out": 	0xd3,
};

Assembler.opsRegIm8 = {
    "mvi": 	0x06,
};

Assembler.opsRegReg = {
    "mov": 	0x40,
};

Assembler.opsReg = {
    "add": 0x80, // regsrc
    "adc": 0x88,
    "sub": 0x90,
    "sbb": 0x98,
    "ana": 0xa0,
    "xra": 0xa8,
    "ora": 0xb0,
    "cmp": 0xb8,

    "inr": 0x04, // regdst (<<3)
    "dcr": 0x05,
};

// these are the direct register ops, regdst
Assembler.opsRegDst = new Array("inr", "dcr");

Assembler.opsRp = {
    "ldax": 0x0a, // rp << 4 (only B, D)
    "stax": 0x02, // rp << 4 (only B, D)
    "dad":  0x09, // rp << 4
    "inx":  0x03, // rp << 4
    "dcx":  0x0b, // rp << 4
    "push": 0xc5, // rp << 4
    "pop":  0xc1, // rp << 4
};

/* try to resolve a number literal, return value or undefined */
Assembler.prototype.resolveNumber = function(identifier) {
    if (identifier === undefined || identifier.length === 0) return undefined;

    var first = identifier[0];
    if ((first === "'" || first === '"') && identifier.length === 3) {
        return 0xff & identifier.charCodeAt(1);
    }

    //if (first === '$') {
    if (identifier.match(/^\$[0-9a-f]+$/)) {
        let test = Number("0x" + identifier.substr(1, identifier.length-1));
        return test;
    }

    //if (Assembler.DecimalDigits.indexOf(identifier[0]) != -1) {
    if (identifier.match(/^[+-]?[0-9]+/)) {
        let test = Number(identifier);
        if (!isNaN(test)) {
            return test.valueOf();
        }

        var suffix = identifier[identifier.length-1].toLowerCase();
        switch (suffix) {
            case 'd':
                test = parseInt(identifier.substr(0, identifier.length-1));
                if (!isNaN(test)) {
                    return test;
                }
                break;
            case 'h':
                test = parseInt(identifier.substr(0, identifier.length-1), 16);
                if (!isNaN(test)) {
                    return test;
                }
                break;
            case 'b':
                test = parseInt(identifier.substr(0, identifier.length-1), 2);
                if (!isNaN(test)) {
                    return test;
                }
                break;
            case 'q':
                var oct = identifier.substr(0, identifier.length-1);
                for (var i = oct.length; --i >= 0;) {
                    if (oct[i] == '8' || oct[i] == '9') return undefined;
                }
                var octaltest = parseInt(oct, 8);
                if (!isNaN(octaltest)) {
                    return octaltest;
                }
                break;
        }
    }
    return undefined;
};

Assembler.prototype.referencesLabel = function(identifier, linenumber) {
    if (this.references[linenumber] === undefined) {
        this.references[linenumber] = identifier.toLowerCase();
    }
};


Assembler.prototype.setmem16 = function(addr, immediate) {
    if (immediate >= 0) {
        this.mem[addr] = immediate & 0xff;
        this.mem[addr+1] = immediate >> 8;
    } else {
        this.mem[addr] = immediate;
        this.mem[addr+1] = immediate;
    }
};

Assembler.prototype.setmem8 = function(addr, immediate) {
    this.mem[addr] = immediate < 0 ? immediate : immediate & 0xff;
};

Assembler.parseRegisterPair = function(s, forstack) {
    if (s !== undefined) {
        s = s.trim().split(';')[0].toLowerCase();
        if (s == 'b' || s == 'bc') return 0;
        if (s == 'd' || s == 'de') return 1;
        if (s == 'h' || s == 'hl') return 2;
        if (forstack) { // push/pop
            if (s == 'psw' || s == 'a') return 3;
        } 
        else {  // lxi, dad
            if (s == 'sp') return 3;
        }
    }
    return -1;
};

Assembler.registers = "bcdehlma";
// b=000, c=001, d=010, e=011, h=100, l=101, m=110, a=111
Assembler.parseRegister = function(s) {
    if (s === undefined) return -1;
    if (s.length > 1) return -1;
    s = s.toLowerCase();
    return Assembler.registers.indexOf(s[0]);
};


Assembler.prototype.tokenDBDW = function(s, addr, length, linenumber) {
    s = s.trim();
    if (s.length === 0) return 0;
    this.useExpression([s], addr, length, linenumber);
    this.referencesLabel(s, linenumber);

    return length;
};

Assembler.prototype.tokenString = function(s, addr, linenumber) {
    for (var i = 0; i < s.length; i+=1) {
        this.setmem8(addr+i, s.charCodeAt(i));
    }
    return s.length;
};

Assembler.prototype.parseDeclBase64 = function(args, addr, linenumber) {
    var text = args.slice(1).join(' ');
    var raw = atob(text);
    var length = raw.length;
    for (var i = 0; i < length; i += 1) {
        this.setmem8(addr + i, raw.charCodeAt(i));
    }
    return length;
};

Assembler.prototype.parseDeclDB = function(args, addr, linenumber, dw) {
    var text = args.slice(1).join(' ');
    var mode = 0;
    var cork = '\0';
    var nbytes = 0;
    var arg_start = 0;
    var i, end_i;
    for (i = 0, end_i = text.length; i < end_i && mode !== 10; i+=1) {
        var char = text[i];
        switch (mode) {
            case 0:
                if (char === '"' || char === "'") {
                    mode = 1; 
                    cork = char;
                    arg_start = i + 1;
                    break;
                } else if (char === ',') {
                    let len = this.tokenDBDW(text.substring(arg_start, i), addr + nbytes, dw, linenumber);
                    if (len < 0) {
                        return -1;
                    }
                    nbytes += len;
                    arg_start = i + 1;
                } else if (char === ';') {
                    // parse what's left, don't include the ';' symbol itself
                    i -= 1;
                    mode = 10;
                    break;
                } 
                break;
            case 1:
                if (char === cork) {
                    cork = '\0';
                    mode = 0;
                    let len = this.tokenString(text.substring(arg_start, i), addr+nbytes, linenumber);
                    if (len < 0) {
                        return -1;
                    }
                    nbytes += len;
                    arg_start = i + 1;
                }
                break; 
        }
    }
    if (mode === 1) return -1;    // unterminated string
    var len = this.tokenDBDW(text.substring(arg_start, i), addr+nbytes, dw, linenumber);
    if (len < 0) return -1;
    nbytes += len;

    return nbytes;
};

Assembler.prototype.getExpr = function(arr) {
};

Assembler.prototype.useExpression = function(s, addr, length, linenumber)
{
    var result = new Expression(addr, length, s, linenumber);
    this.expressions.push(result);
    return result;
};

Assembler.prototype.labelResolution = function(label, value, addr, lineno, 
    rewrite)
{
    if (this.label_resolutions[label] && !rewrite) {
        return undefined;
    }
    var numberwang = this.resolveNumber(value);
    var lr = {};
    if (numberwang !== undefined) {
        lr = {number: numberwang, linenumber: lineno};
    }
    else {
        lr = {expression: value, addr: addr, linenumber: lineno};
    }
    this.label_resolutions[label] = lr;
    return lr;
};

Assembler.prototype.setNewEncoding = function(encoding) {
    try {
        var encoded = Util.toTargetEncoding('test', encoding);
        this.targetEncoding = encoding;
    } catch(err) {
        return -1;
    }
    return -100000;
};

Assembler.prototype.splitParts = function(s)
{
    var lines = [];
    var parts = [];
    var state = 0;
    var cork = undefined;
    var remainder = s.trimStart();
    for(;state !== 100;) {
        switch (state) {
            case 0:
                switch (remainder.charAt(0)) {
                    case ';': 
                        parts.push(remainder);
                        state = 100;
                        break;
                    case '"':
                        cork = '"';
                        state = 10;
                        break;
                    case "'":
                        cork = "'";
                        state = 10;
                        break;
                    case '\\':
                        lines.push(parts);
                        parts = [];
                        remainder = remainder.slice(1).trimStart();
                        break;
                    default:
                        var at = remainder.search(/[\s\\;"']/);
                        if (at >= 0) {
                            parts.push(remainder.slice(0, at));
                            remainder = remainder.slice(at).trimStart();
                        } 
                        else {
                            parts.push(remainder);
                            state = 100;
                        }
                        break;
                }
                break;
            case 10:
                var n = remainder.slice(1).search(cork);
                if (n > 0) {
                    n += 2;
                    parts.push(remainder.slice(0, n));
                    remainder = remainder.slice(n).trimStart();
                    state = 0;
                }
                else {
                    parts.push(remainder);
                    remainder = '';
                    state = 100;
                }
                break;
            case 100:
                break;
        }
        if (remainder.length == 0) {
            break;
        }
    }
    lines.push(parts);
    return lines;
};

Assembler.prototype.parseInstruction = function(parts, addr, linenumber) {
    for (let i = 0; i < parts.length; i++) {
        if (parts[i][0] == ';') {
            parts.length = i;
            break;
        }
    }

    var labelTag;
    var immediate;
    var regusage;
    var result = 0;
    var label_obj;

    for (;parts.length > 0;) {
        var opcs;
        var mnemonic = parts[0].toLowerCase();

        if (mnemonic.length === 0) {
            parts = parts.slice(1);
            continue;
        }

        // no operands
        if ((opcs = Assembler.ops0[mnemonic]) !== undefined) {
            this.mem[addr] = opcs;
            if (mnemonic == "xchg") {
                regusage = ['#', 'h', 'l', 'd', 'e'];
            } else if (mnemonic == "sphl" || mnemonic == "xthl") {
                regusage = ['#', 'sp', 'h'];
            } else if (["ral", "rar", "rla", "rra", "cma"].indexOf(mnemonic) != -1) {
                regusage = ['#', 'a'];
            }

            result = 1;
            break;
        }

        // immediate word
        if ((opcs = Assembler.opsIm16[mnemonic]) !== undefined) {
            this.mem[addr] = opcs;

            this.useExpression(parts.slice(1), addr+1, 2, linenumber);

            if (["lhld", "shld"].indexOf(mnemonic) != -1) {
                regusage = ['#', 'h', 'l'];
            }
            else if (["lda", "sta"].indexOf(mnemonic) != -1) {
                regusage = ['#', 'a'];
            }

            result = 3;
            break;
        }

        // register pair <- immediate
        if ((opcs = Assembler.opsRpIm16[mnemonic]) !== undefined) {
            let subparts = parts.slice(1).join(" ").split(",");
            if (subparts.length < 2) return -3;
            let rp = Assembler.parseRegisterPair(subparts[0], false);
            if (rp == -1) return -3;

            this.mem[addr] = opcs | (rp << 4);

            this.useExpression(subparts.slice(1), addr+1, 2, linenumber);
            result = 3;
            break;
        }

        // immediate byte		
        if ((opcs = Assembler.opsIm8[mnemonic]) !== undefined) {
            this.mem[addr] = opcs;
            this.useExpression(parts.slice(1), addr+1, 1, linenumber);
            result = 2;
            break;
        }

        // single register, im8
        if ((opcs = Assembler.opsRegIm8[mnemonic]) !== undefined) {
            let subparts = parts.slice(1).join(" ").split(",");
            if (subparts.length < 2) {
                result = -2;
                break;
            }
            var reg = Assembler.parseRegister(subparts[0]);
            if (reg == -1) {
                result = -2;
                break;
            }

            this.mem[addr] = opcs | reg << 3;

            this.useExpression(subparts.slice(1), addr+1, 1, linenumber);
            result = 2;			
            break;
        }

        // dual register (mov)
        if ((opcs = Assembler.opsRegReg[mnemonic]) !== undefined) {
            let subparts = parts.slice(1).join(" ").split(",");
            if (subparts.length < 2) {
                result = -1;
                break;
            }
            let reg1 = Assembler.parseRegister(subparts[0].trim());
            let reg2 = Assembler.parseRegister(subparts[1].trim());
            if (reg1 == -1 || reg2 == -1) {
                result = -1;
                break;
            }
            this.mem[addr] = opcs | reg1 << 3 | reg2;
            regusage = [subparts[0].trim(), subparts[1].trim()];
            result = 1;
            break;
        }

        // single register
        if ((opcs = Assembler.opsReg[mnemonic]) !== undefined) {
            let reg = Assembler.parseRegister(parts[1]);
            if (reg == -1) {
                result = -1;
                break;
            }

            if (Assembler.opsRegDst.indexOf(mnemonic) != -1) {
                reg <<= 3;
            }
            this.mem[addr] = opcs | reg;

            regusage = [parts[1].trim()];
            if (["ora", "ana", "xra", "add", "adc", "sub", "sbc", "cmp"].indexOf(mnemonic) != -1) {
                regusage.push('#', 'a');
            }

            result = 1;
            break;
        }

        // single register pair
        if ((opcs = Assembler.opsRp[mnemonic]) !== undefined) {
            let stack = ["push","pop"].indexOf(mnemonic) != -1;
            let rp = Assembler.parseRegisterPair(parts[1], stack);
            if (rp == -1) {
                result = -1;
                break;
            }
            if (["ldax","stax"].indexOf(mnemonic) != -1 && rp > 1) {
                result = -1;
                break;
            }
            this.mem[addr] = opcs | rp << 4;

            regusage = ['@'+parts[1].trim()];
            if (mnemonic == "dad") {
                regusage.push('#', 'h', 'l');
            } else if (["inx", "dcx"].indexOf(mnemonic) != -1) {
                if (["h","d"].indexOf(parts[1].trim()) != -1) {
                    regusage.push('#', Assembler.rpmap[parts[1].trim()]);
                }
            }
            result = 1;
            break;
        }		

        // rst
        if (mnemonic == "rst") {
            let n = this.resolveNumber(parts[1]);
            if (n >= 0 && n < 8) {
                this.mem[addr] = 0xC7 | n << 3;
                result = 1;
            } else {
                result = -1;
            }
            break;
        }

        if (mnemonic == ".org" || mnemonic == "org") {
            this.processLabelResolutions();
            let n = this.evaluateExpression2(parts.slice(1).join(' '), addr, 
                linenumber);
            if (n >= 0 && n < 65536) {
                if (this.org === undefined || n < this.org) {
                    this.org = n;
                }
                result = -100000-n;
            } else {
                result = -1;
            }
            break;
        }

        if (mnemonic == ".project") {
            if (parts[1] !== undefined && parts[1].trim().length > 0) {
                this.project = parts[1];
            }
            result = -100000;
            break;
        }

        if (mnemonic == ".tape") {
            if (parts[1] !== undefined && parts[1].trim().length > 0) {
                this.tapeFormat = parts[1];
                var test = new TapeFormat(this.tapeFormat);
                if (test.format) {
                    result = -100000;
                    break;
                }
            }
        }

        if (mnemonic == ".nodump") {
            this.doHexDump = false;
            result = -100000;
            break;
        }
        if (mnemonic == ".nohex") {
            this.doIntelHex = false;
            result = -100000;
            break;
        }

        // assign immediate value to label
        if (mnemonic == ".equ" || mnemonic == "equ") {
            if (labelTag === undefined) {
                return -1;
            }
            var ex = new Expression(-1, 2, parts.slice(1), linenumber);
            this.labelResolution(labelTag, ex.text, addr, linenumber, true);
            result = 0;
            break;
        }

        if (mnemonic == ".encoding") {
            let encoding = parts.slice(1).join(' ');	
            return this.setNewEncoding(encoding);
        }

        if (mnemonic == 'cpu' ||
                mnemonic == 'aseg' ||
                mnemonic == '.aseg') return 0;

        if (mnemonic == 'db' || mnemonic == '.db' || mnemonic == 'str') {
            result = this.parseDeclDB(parts, addr, linenumber, 1);
            break;
        }
        if (mnemonic == 'dw' || mnemonic == '.dw') {
            result = this.parseDeclDB(parts, addr, linenumber, 2);
            break;
        }
        if (mnemonic == 'ds' || mnemonic == '.ds') {
            let size = this.evaluateExpression2(parts.slice(1).join(' '), addr, 
                linenumber);
            if (size >= 0) {
                for (let i = 0; i < size; i++) {
                    this.setmem8(addr+i, 0);
                }
                result = size;
            } else {
                result = -1;
            }
            break;
        }
        if (mnemonic == 'db64') {
            result = this.parseDeclBase64(parts, addr, linenumber);
            break;
        }

        if (parts[0][0] == ";") {
            return 0;
        }

        // nothing else works, it must be a label
        if (labelTag === undefined) {
            var splat = mnemonic.split(':');
            labelTag = splat[0];
            label_obj = this.labelResolution(labelTag, String(addr), addr,
                linenumber);
            if (label_obj === undefined) {
                result = -1;
                break;
            }
            parts.splice(0, 1, splat.slice(1).join(':'));
            continue;
        }

        this.mem[addr] = -2;
        result = -1; // error
        break;
    }

    return result;
};


// -- output --

Assembler.prototype.labelList = function() {
    const s = "                        ";
    const f = function(label, addr) {
        var result = label.substring(0, s.length);
        if (result.length < s.length) {
            result += s.substring(result.length);
        }
        result += addr < 0 ? "????" : Util.hex16(addr);
        return result;
    };

    var sorted = [];
    for (let i in this.labels) {
        sorted[sorted.length] = i;
    }
    sorted.sort();

    var result = "Labels:\n";
    var col = 1;
    for (var j = 0; j < sorted.length; j++) {
        let i = sorted[j];
        var label = this.labels[i];

        // hmm? 
        if (label === undefined) continue;
        if (i.length === 0) continue; // resolved expressions
        var resultClass = (col%4 === 0 ? 't2' : 't1');

        result += f(i,label);
        if ((col + 1) % 2 === 0) {
            result += "\n";
        } 
        else {
            result += "\t";
        }
        col++;
    }

    return result;
};

Assembler.prototype.dumpspan = function(org, mode) {
    var result = "";
    var nonempty = false;
    var conv = mode ? Util.char8 : Util.hex8;
    for (var i = org; i < org+16; i++) {
        if (this.mem[i] !== undefined) nonempty = true;
        if (mode == 1) {
            result += conv(this.mem[i]);
        } else {
            result += (i > org && i%8 === 0) ? "-" : " ";
            if (this.mem[i] === undefined) {
                result += '  ';
            } else{
                result += conv(this.mem[i]);
            }
        }
    }

    return nonempty ? result : false;
};

Assembler.prototype.dump = function() {
    var org = 0;

    if (org % 16 !== 0) org = org - org % 16;

    var result = "Memory dump:\n";
    var lastempty;

    var printline = 0;

    for (var i = org, end_i = this.mem.length; i < end_i; i += 16) {
        var span = this.dumpspan(i, 0);
        //if (span || !lastempty) {
        //    result += '<pre ' + 'class="d' + (printline++%2) + '"';
        //    result += ">";
        //}
        if (span) {
            result += Util.hex16(i) + ": ";
            result += span;
            result += '  ';
            result += this.dumpspan(i, 1);
            result += '\n';
            lastempty = false;
        } 
        if (!span && !lastempty) {
            result += ' \n';//" </pre><br/>";
            lastempty = true;
        }
    }

    return result;
};

Assembler.prototype.intelHex = function() {
    var i, j;
    var line = "";
    var r = "";
    var pureHex = "";
    r += "<pre>Intel HEX:</pre>";
    r += '<div class="hordiv"></div>';

    r += "<pre>";
    r += 'cat &gt;' + this.hexFileName + ' &lt;&lt;X<br/>';
    //r += 'ed<br>i<br>';
    for (i = 0; i < this.mem.length;) {
        for (j = i; j < this.mem.length && this.mem[j] === undefined; j++);
        i = j;
        if (i >= this.mem.length) break; 

        line = ":";

        var cs = 0;

        var rec = "";
        for (j = 0; j < 32 && this.mem[i+j] !== undefined; j++) {
            var bb = this.mem[i+j];
            if (bb < 0) bb = 0;
            rec += Util.hex8(bb); 
            cs += bb;
        }

        cs += j; line += Util.hex8(j);   // byte count
        cs += (i>>8)&255; cs+=i&255; line += Util.hex16(i);  // record address
        cs += 0; line += "00";      // record type 0, data
        line += rec;

        cs = 0xff&(-(cs&255));
        line += Util.hex8(cs);
        pureHex += line + '\n';
        r += line + '<br/>';

        i += j;
    }
    r += ':00000001FF<br/>';
    pureHex += ':00000001FF\n';
    //r += '.<br>w ' + this.hexFileName +'<br>q<br>';
    r += 'X<br/>';
    r += this.objCopy + ' -I ihex ' + this.hexFileName + ' -O binary ' + 
        this.getBinFileName() + '<br/>';
    if (this.postbuild.length > 0) {
        r += this.postbuild + '<br/>';
    }
    r += '</pre>';

    this.hexText = pureHex;
    return r;
};

Assembler.prototype.getLabel = function(l) {
    return this.labels[l.toLowerCase()];
};


Assembler.prototype.gutter = function(text,lengths,addresses) {
    var result = [];
    var addr = 0;

    for(var i = 0, end_i = text.length; i < end_i; i += 1) {
        var unresolved = false;
        var width = 0;
        var hexes = new Int32Array(lengths[i]);
        for (let b = 0; b < lengths[i]; ++b) {
            var bytte = this.mem[addresses[i]+b];
            if (bytte === undefined || bytte < 0) {
                unresolved = true;
                hexes[b] = -1;
            } 
            else {
                hexes[b] = bytte;
            }
        }

        var err = this.errors[i] || unresolved !== false;

        var gutobj = {
            addr : addresses[i],
            hex : hexes,
            error: err
        };

        result.push(gutobj);
    }

    return result;
}

Assembler.prototype.listing = function(text,lengths,addresses) { 
    var result = [];
    var addr = 0;
    for(var i = 0, end_i = text.length; i < end_i; i += 1) {
        var labeltext = "";
        var remainder = text[i];
        var comment = '';
        var parts = text[i].split(/[\:\s]/);
        if (parts.length > 1) {
            if (this.getLabel(parts[0]) != -1 && parts[0].trim()[0] != ';') {
                labeltext = parts[0];
                remainder = text[i].substring(labeltext.length);
            }
        }

        var semicolon = remainder.indexOf(';');
        if (semicolon != -1) {
            comment = remainder.substring(semicolon);
            remainder = remainder.substring(0, semicolon);
        }

        // truncate awfully long lines in the listing before processRegUsage
        if (remainder.length > 128) {
            remainder = remainder.substring(0, 128) + "&hellip;";
        }

        var id = "l" + i;
        var labelid = "label" + i;
        var remid = "code" + i;

        var hexes = "";
        var unresolved = false;
        var width = 0;

        var len = lengths[i] > 4 ? 4 : lengths[i];
        for (let b = 0; b < len; b++) {
            hexes += Util.hex8(this.mem[addresses[i]+b]) + ' ';
            width += 3;
            if (this.mem[addresses[i]+b] < 0) unresolved = true;
        }
        hexes += "                ".substring(width);

        result.push((lengths[i] > 0 ? Util.hex16(addresses[i]) : "") + "\t" + hexes);

        if (labeltext.length > 0) {
            result.push(labeltext);
        }
        var padding = '';
        for (var b = 0; b < remainder.length && Util.isWhitespace(remainder[b]); b++) {
            padding += remainder[b]; // copy to preserve tabs
        }
        result.push(padding);
        remainder = remainder.substring(b);
        if (remainder.length > 0) {
            result.push(remainder);
        }

        if (comment.length > 0) {
            result.push(comment);
        }

        // display only first and last lines of db thingies
        if (len < lengths[i]) {
            result.push('\n\t. . .\n');
            var subresult = '';
            for (var subline = 1; subline*4 < lengths[i]; subline++) {
                subresult = '';
                subresult += Util.hex16(addresses[i]+subline*4) + '\t';
                for (var sofs = 0; sofs < 4; sofs += 1) {
                    var adr = subline*4+sofs;
                    if (adr < lengths[i]) {
                        subresult += Util.hex8(this.mem[addresses[i]+adr]) + ' ';
                    }
                }
            }
            result.push(subresult + '\n');
        }
        result.push('\n');

        addr += lengths[i];
    }

    result.push(this.labelList());

    result.push('\n');

    if (this.doHexDump) {
        result.push(this.dump());
    }

    if (this.doIntelHex) {
        result.push(this.intelHex());
    }

    return result.join("");
};

Assembler.prototype.error = function(line, text) {
    this.errors[line] = text;
};

function Expression(addr, length, s, linenumber)
{
    this.addr = addr;
    this.length = length;
    this.linenumber = linenumber;
    this.update(s);
}

Expression.prototype.update = function(arr) 
{
    var ex = arr.join(' ').trim();
    if (ex[0] == '"' || ex[0] == "'") {
        this.text = ex;
    }
    else {
        this.text = ex.split(';')[0];
    }
}

// assembler main entry point
Assembler.prototype.assemble = function(src,listobj) {
    var lengths = Array();
    var addresses = Array();

    var inputlines = src.split('\n');

    var addr = 0;
    this.labels = [];
    this.mem.length = 0;
    this.org = undefined;
    this.errors.length = 0;
    this.postbuild = '';
    this.objCopy = 'gobjcopy';
    this.hexText = '';
    this.xref = {};

    this.expressions = [];          // expressions to evaluate after label resolution
    this.label_resolutions = {};    // labels, resolved and not

    for (var line = 0, end = inputlines.length; line < end; line += 1) {
        var encodedLine = Util.toTargetEncoding(inputlines[line].trim(), this.targetEncoding);
        var sublines = this.splitParts(encodedLine);

        for (var sul = 0; sul < sublines.length; ++sul) {
            var size = this.parseInstruction(sublines[sul], addr, line);
            if (size <= -100000) {
                addr = -size-100000;
                size = 0;
            } else if (size < 0) {
                this.error(line, "syntax error");
                size = 0; //-size;
                break;
            }
            var l = lengths[line];
            if (l === undefined) {
                lengths[line] = size;
            }
            else {
                lengths[line] = lengths[line] + size;
            }
            if (sul === 0) addresses[line] = addr;
            addr += size;
        }
    }

    this.resolveExpressions();

    /* If org was not defined explicitly, take first defined address */
    if (this.org === undefined) {
        var org;
        for (org = 0; org < this.mem.length && this.mem[org] === undefined; org++);
        this.org = org;
    }

    this.gutterContent = this.gutter(inputlines, lengths, addresses);
    if (listobj) {
        listobj.text = this.listing(inputlines, lengths, addresses);
    }
};

Assembler.prototype.addxref = function(ident, linenumber)
{
    ident = ident.toLowerCase();
    if (this.xref[ident] === undefined) {
        this.xref[ident] = [];
    }
    this.xref[ident].push(linenumber);
}

Assembler.prototype.evaluateExpression2 = function(input, addr0, linenumber) {
    var originput = input;
    input = this.evalPrepareExpr(input, addr0);
    if (!input) {
        return -1;
    }
    try {
    var q = input.split(/<<|>>|[+\-*\/()\^\&\|]/);
    var expr = '';
    for (var ident = 0; ident < q.length; ident++) {
        var qident = q[ident].trim();
        if (this.resolveNumber(qident) !== undefined) continue;
        var addr = this.labels[qident.toLowerCase()];
        if (addr !== undefined) {
            expr += 'var _' + qident + '=' + addr +';\n';
            var rx = new RegExp('\\b'+qident+'\\b', 'gm');
            input = input.replace(rx, '_' + qident);
            this.addxref(qident, linenumber);
        }
    }
    //console.log('0 input=',  input);
    //console.log('1 expr=', expr);
    var that = this;
    expr += input.replace(/\b0x[0-9a-fA-F]+\b|\b[0-9][0-9a-fA-F]*[hbqdHBQD]?\b|'.'/g,
            function(m) {
                return that.resolveNumber(m);
            });
    //console.log('expr=', expr);
    return this.evalInvoke(expr.toLowerCase());
    }
    catch(err) {
        this.errors[linenumber] = err.toString();
        return -1;
    }
};


Assembler.prototype.processLabelResolutions_once = function()
{
    var lr2 = {};
    var unresolved_count = 0;
    for (var label in this.label_resolutions) {
        var lr = this.label_resolutions[label];
        if (lr.expression) {
            var ev = this.evaluateExpression2(lr.expression, lr.addr, 
                lr.linenumber);
            if (ev === undefined) {
                lr2[label] = lr;
                ++unresolved_count;
            }
            else {
                this.labels[label] = ev;
                this.addxref(label, lr.linenumber);
            }
        }
        else {
            this.labels[label] = lr.number;
            this.addxref(label, lr.linenumber);
        }
    }
    //console.log('resolveExpressions: labels=', this.labels, ' lr2=', lr2);
    this.label_resolutions = lr2;
    return unresolved_count;
};

Assembler.prototype.processLabelResolutions = function()
{
    var max_iteration = Object.keys(this.label_resolutions).length;
    var unresolved_count = max_iteration;
    for (var i = 0; i < max_iteration && unresolved_count > 0; ++i) {
        unresolved_count = this.processLabelResolutions_once();
    }
};


Assembler.prototype.resolveExpressions = function()
{
    this.processLabelResolutions();
    for (var i = 0; i < this.expressions.length; ++i) {
        var eobj = this.expressions[i];
        var ev = this.evaluateExpression2(eobj.text, eobj.addr-1,
            eobj.linenumber);
        if (ev !== undefined) {
            if (eobj.length === 1) {
                if (ev >= -128 && ev < 256) {
                    this.setmem8(eobj.addr, ev & 0xff);
                }
            } 
            else if (eobj.length === 2) {
                if (ev >= -32768 && ev < 65536) {
                    this.setmem16(eobj.addr, ev & 0xffff);
                }
            }
        }
    }
};


// scapegoat functionis for V8 because try/catch
Assembler.prototype.evalPrepareExpr = function(input, addr) {
    try {
        input = input.replace(/\$([0-9a-fA-F]+)/, '0x$1');
        input = input.replace(/(?:^|[^'])([\$\.])/, ' '+addr+' ');
        input = input.replace(/([\d\w]+)\s(shr|shl|and|or|xor)\s([\d\w]+)/gi,'($1 $2 $3)');
        input = input.replace(/\b(shl|shr|xor|or|and|[+\-*\/()])\b/gi,
                function(m) {
                    switch (m) {
                        case 'and':
                            return '&';
                        case 'or':
                            return '|';
                        case 'xor':
                            return '^';
                        case 'shl':
                            return '<<';
                        case 'shr':
                            return '>>';
                        default:
                            return m;
                    }
                });
    } catch (e) {
        return null;
    }
    return input;
};

Assembler.prototype.evalInvoke = function(expr) {
    try {
        return eval(expr);
    } catch (err) {
        //console.log('expr was:',expr);
        //console.log(err);
    }

    return undefined;
};

var asm = new Assembler();
self.addEventListener('message', function(e) {
    var cmd = e.data['command'];
    if (cmd == 'assemble') {
        asm.assemble(e.data['src']);
        self.postMessage(
                {//'listing':asm.listingText, 
                    'gutter':asm.gutterContent,
                    'errors':asm.errors,
                    //'textlabels':asm.textlabels,
                    //'references':asm.references,
                    'org':asm.org,
                    'xref':asm.xref,
                    'labels':asm.labels,
                    'kind':'assemble',
                });
    } 
    else if (cmd == 'getmem') {
        self.postMessage({'mem': JSON.parse(JSON.stringify(asm.mem)),
            'org': asm.org,
            'binFileName': asm.getBinFileName(),
            'tapeFormat':asm.tapeFormat,
            'download':false});
    } 
    else if (cmd == 'getbin') {
        self.postMessage({'mem': JSON.parse(JSON.stringify(asm.mem)),
            'org': asm.org,
            'filename': asm.getBinFileName(),
            'download':'bin'
        });
    } 
    else if (cmd == 'gethex') {
        asm.intelHex(); // make sure that hexText is up to date
        self.postMessage({'mem': JSON.parse(JSON.stringify(asm.mem)),
            'org': asm.org,
            'filename': asm.getHexFileName(),
            'hex':asm.hexText,
            'download':'hex'
        });
    } 
    else if (cmd == 'gettap') {
        self.postMessage({'mem': JSON.parse(JSON.stringify(asm.mem)),
            'org': asm.org,
            'filename': asm.getTapFileName(),
            'tapeFormat':asm.tapeFormat,
            'download':'tap'
        });
    } 
    else if (cmd == 'getwav') {
        self.postMessage({'mem': JSON.parse(JSON.stringify(asm.mem)),
            'org': asm.org,
            'binFileName': asm.getBinFileName(),
            'tapeFormat':asm.tapeFormat,
            'download':e.data['mode']
        });
    }
}, false);
"use strict";
var fs = require('fs');

function asmCall(msg, callback) {
    self.postMessage = callback;
    self.assemblerInterface({data: msg});
}

function paddedBinary(num) {
    var str = Number(num).toString(2);
    while (str.length % 8 !== 0) {
        str = '0' + str;
    }

    var str2 = '';
    for (var i = 0; i < str.length; i += 4) {
        str2 += str.substring(i, i + 4) + ' ';
    }

    return str2.trim();
}

// var sourceCode = ".org 0\nbegin:\nmvi a, 0\n jmp begin\n";

if (process.argv.length < 3) {
    console.log('Usage: node ' + process.argv[1] + ' <asm file>');
    return;
}

var sourceCode = fs.readFileSync(process.argv[2], 'utf-8');


asmCall({command: 'assemble', src: sourceCode}, function(result) {

    // console.log(JSON.stringify(result));

    var sourceLines = sourceCode.split('\n');

    var addressLineLookup = {};
    for (var j = 0; j < sourceLines.length; j++) {
        var line = sourceLines[j].trim();
        if (line.length === 0) {
            continue;
        }

        if (addressLineLookup.hasOwnProperty(result.gutter[j].addr)) {
            addressLineLookup[result.gutter[j].addr].push(line);
        } else {
            addressLineLookup[result.gutter[j].addr] = [line];
        }
    }

    if (result.errors.length > 0) {
        console.log('== ERROR ==');
        for (var i = 0; i < result.errors.length; i++) {
            if (result.errors[i] !== undefined) {
                console.log('Line ' + (i + 1) + ' ' + result.errors[i] + ': ' + sourceLines[i]);
            }
        }
        console.log('== ERROR ==');
        return;
    }

    asmCall({command: 'getbin'}, function(result) {
        var startAddr = result.org;

        // console.log(JSON.stringify(result));

        console.log('== Starting address: 0x' + Number(startAddr).toString(16) + ' ==');

        for (var i = 0; i < result.mem.length; i++) {
            var addr = startAddr + i;

            var line = paddedBinary( Math.floor(addr / 256)) + ' ' + paddedBinary(addr % 256);
            line += '    ' + paddedBinary(result.mem[i]);

            if (addressLineLookup.hasOwnProperty(i)) {
                line += '    ' + addressLineLookup[i].join(' / ');
            }

            console.log(line);

        }
        
        if (result.mem.length < 256) {
            console.log("Intel HEX:");

            function gethex(num) {
                var a = Number(num).toString(16);
                if (a.length < 2) a = '0' + a;
                return a.toUpperCase();
            }
        
            var ihex = ':' + gethex(result.mem.length) + gethex(Math.floor(startAddr / 256)) + gethex(startAddr % 256) + '00';
            var checksum = 0;

            for (var i = 0; i < result.mem.length; i++) {
                ihex += gethex(result.mem[i]);
                checksum = (checksum + result.mem[i]) % 256;
            }
        
            checksum = -checksum;
            while (checksum < 0) {
                checksum += 256;
            }

            ihex += gethex(checksum);
            console.log(ihex);
        } else {
            console.log('skipping intel  hex gen');
        }

    });

});

