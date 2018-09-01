export default [
  { name : "1级绿宝石", desc : "敏捷+10",
    attrs : {
      functional : {
        power : +10,
      },
      describe : {
        color : 'green'
      }
    }
  },
  { name : "2级绿宝石",   desc : "敏捷+20"，
    attrs : {
      functional : {
        power : +20,
      },
      describe : {
        color : 'green'
      }
    }
  },
  { name : "3级绿宝石", desc : "敏捷+30"，
    attrs : {
      functional : {
        power : +30,
      },
      describe : {
        color : 'green'
      }
    }
  },
  { name : "4级绿宝石", desc : "敏捷+50",
    attrs : {
      functional : {
        power : +50,
      },
      describe : {
        color : 'green'
      }
    }
  },
  { name : "5级绿宝石", desc : "敏捷+80",
    attrs : {
      functional : {
        power : +80,
      },
      describe : {
        color : 'green'
      }
    }
  },
  { name : "6级绿宝石", desc : "敏捷+110",
    attrs : {
      functional : {
        power : +110,
      },
      describe : {
        color : 'green'
      }
    }
  },
  {
    name : "7级绿宝石",
    desc : "敏捷+150",
    attrs : {
      functional : {
        power : +150,
      },
      describe : {
        color : 'green'
      }
    }
  }
].map((item, index) => Obj.deepCover({
  id : index,
  attrs : {
    functional : {

    },
    describe : {
      color : 'green'
    }
  }
},item))
