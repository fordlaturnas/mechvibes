const set_name = 'CherryMX Brown - PBT keycaps - Alt';
const set_tags = {
  switches: 'cherrymx',
  type: 'brown',
  feedback: 'tactile',
  is_lubed: false,
  keycap: 'pbt',
};
const sound_file = 'sound.wav';
const keycodes = {
  // row 1
  '27': [2294, 246], // escape
  '112': [2755, 223], // f1
  '113': [3169, 200], // f2
  '114': [3547, 200], // f3
  '115': [3924, 200], // f4
  '116': [4322, 200], // f5
  '117': [4690, 200], // f6
  '118': [5032, 200], // f7
  '119': [5431, 200], // f8
  '120': [5794, 255], // f9
  '121': [6114, 213], // f10
  '122': [6560, 207], // f11
  '123': [6927, 233], // f12
  '44': [7339, 213], // 'print screen'
  '145': [7677, 300], // 'scroll lock'
  '19': [8067, 239], // pause/break

  // row 2
  '192': [9068, 275], // 'back quote'
  '49': [9430, 227], // '1'
  '50': [9830, 272], // '2'
  '51': [10184, 224], // '3'
  '52': [10563, 214], // '4'
  '53': [10911, 200], // '5'
  '54': [11279, 209], // '6'
  '55': [11623, 209], // '7'
  '56': [11987, 200], // '8'
  '57': [12327, 231], // '9'
  '48': [12662, 216], // '0'
  '189': [13058, 200], // minus
  '187': [13407, 206], // equals
  '8': [13762, 200], // backspace
  '45': [14198, 203], // insert
  '36': [14535, 208], // home
  '33': [14870, 178], // 'page up'

  // row 3
  '9': [15931, 177], // tab
  '81': [16299, 183], // q
  '87': [16637, 200], // w
  '69': [16956, 237], // e
  '82': [17272, 212], // r
  '84': [17626, 222], // t
  '89': [17957, 200], // y
  '85': [18299, 210], // u
  '73': [18639, 216], // i
  '79': [18989, 205], // o
  '80': [19325, 232], // p
  '219': [19664, 200], // 'open bracket'
  '221': [20019, 200], // 'close bracket'
  '220': [20387, 202], // 'back slash'
  '46': [20764, 200], // delete
  '35': [21100, 226], // end
  '34': [21406, 206], // 'page down'

  // row 4
  '20': [22557, 200], // 'caps lock'
  '65': [22903, 200], // a
  '83': [23236, 200], // s
  '68': [23577, 227], // d
  '70': [23928, 165], // f
  '71': [24235, 210], // g
  '72': [24522, 213], // h
  '74': [24915, 200], // j
  '75': [25276, 200], // k
  '76': [25626, 222], // l
  '186': [25986, 221], // semicolon
  '222': [26336, 200], // quote
  '13': [26702, 200], // enter

  // row 5
  '160': [28068, 252], // 'left shift'
  '90': [28109, 200], // z
  '88': [28528, 146], // x
  '67': [28852, 215], // c
  '86': [29559, 215], // v
  '66': [29907, 206], // b
  '78': [30254, 214], // n
  '77': [30603, 226], // m
  '188': [30964, 212], // comma
  '190': [31315, 215], // period
  '191': [31659, 202], // slash
  '161': [32017, 202], // 'right shift'
  '38': [32431, 254], // up

  // row 6
  '162': [33851, 204], // 'left control'
  '91': [34180, 220], // 'left meta'
  '164': [34540, 270], // 'left alt'
  '32': [34907, 257], // space
  '165': [35490, 194], // 'right alt'
  '93': [35875, 220], // menu key // 'right meta'
  /* blank */
  '163': [36573, 200], // 'right control'
  '37': [36907, 200], // left
  '40': [37267, 200], // down
  '39': [37582, 200], // right
};

module.exports = { set_name, set_tags, keycodes, sound_file };
