export default [
  { name : "1级黄宝石", desc : "力量+10",
    attrs : {
      functional : {
        power : +10,
      },
      describe : {
        color : 'yellow'
      }
    }
  },
  { name : "2级黄宝石",   desc : "力量+20"，
    attrs : {
      functional : {
        power : +20,
      },
      describe : {
        color : 'yellow'
      }
    }
  },
  { name : "3级黄宝石", desc : "力量+30"，
    attrs : {
      functional : {
        power : +30,
      },
      describe : {
        color : 'yellow'
      }
    }
  },
  { name : "4级黄宝石", desc : "力量+50",
    attrs : {
      functional : {
        power : +50,
      },
      describe : {
        color : 'yellow'
      }
    }
  },
  { name : "5级黄宝石", desc : "力量+80",
    attrs : {
      functional : {
        power : +80,
      },
      describe : {
        color : 'yellow'
      }
    }
  },
  { name : "6级黄宝石", desc : "力量+110",
    attrs : {
      functional : {
        power : +110,
      },
      describe : {
        color : 'yellow'
      }
    }
  },
  {
    name : "7级黄宝石",
    desc : "力量+150",
    attrs : {
      functional : {
        power : +150,
      },
      describe : {
        color : 'yellow'
      }
    }
  }
].map((item, index) => Obj.deepCover({
  id : index,
  attrs : {
    functional : {

    },
    describe : {
      color : 'yellow'
    }
  }
},item))
