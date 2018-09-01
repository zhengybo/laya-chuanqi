export default [
  { name : "1级红宝石", desc : "智力+10",
    attrs : {
      functional : {
        power : +10,
      },
      describe : {
        color : 'red'
      }
    }
  },
  { name : "2级红宝石",   desc : "智力+20"，
    attrs : {
      functional : {
        power : +20,
      },
      describe : {
        color : 'red'
      }
    }
  },
  { name : "3级红宝石", desc : "智力+30"，
    attrs : {
      functional : {
        power : +30,
      },
      describe : {
        color : 'red'
      }
    }
  },
  { name : "4级红宝石", desc : "智力+50",
    attrs : {
      functional : {
        power : +50,
      },
      describe : {
        color : 'red'
      }
    }
  },
  { name : "5级红宝石", desc : "智力+80",
    attrs : {
      functional : {
        power : +80,
      },
      describe : {
        color : 'red'
      }
    }
  },
  { name : "6级红宝石", desc : "智力+110",
    attrs : {
      functional : {
        power : +110,
      },
      describe : {
        color : 'red'
      }
    }
  },
  {
    name : "7级红宝石",
    desc : "智力+150",
    attrs : {
      functional : {
        power : +150,
      },
      describe : {
        color : 'red'
      }
    }
  }
].map((item, index) => Obj.deepCover({
  id : index,
  attrs : {
    functional : {

    },
    describe : {
      color : 'red'
    }
  }
},item))
