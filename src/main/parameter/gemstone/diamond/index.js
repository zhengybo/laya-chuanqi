export default [
  { name : "1级钻石", desc : "暴伤+3% CD-1%",
    attrs : {
      functional : {
        criticalDamage : 3,
        Cooling : 1
      },
      describe : {
        color : ''
      }
    }
  },
  { name : "2级钻石",   desc : "暴伤+5% CD-1%"，
    attrs : {
      functional : {
        criticalDamage : 5,
        Cooling : 1
      },
      describe : {
        color : ''
      }
    }
  },
  { name : "3级钻石", desc : "暴伤+8% CD-2%"，
    attrs : {
      functional : {
        criticalDamage : 8,
        Cooling : 2
      },
      describe : {
        color : ''
      }
    }
  },
  { name : "4级钻石", desc : "暴伤+12% CD-2%",
    attrs : {
      functional : {
        criticalDamage : 12,
        Cooling : 2
      },
      describe : {
        color : ''
      }
    }
  },
  { name : "5级钻石", desc : "暴伤+18% CD-3%",
    attrs : {
      functional : {
        criticalDamage : 3,
        Cooling : 1
      },
      describe : {
        color : ''
      }
    }
  },
  { name : "6级钻石", desc : "暴伤+18% CD-3%",
    attrs : {
      functional : {
        criticalDamage : 3,
        Cooling : 1
      },
      describe : {
        color : ''
      }
    }
  },
  {
    name : "7级钻石",
    desc : "暴伤+25% CD-4%",
    attrs : {
      functional : {
        criticalDamage : 3,
        Cooling : 1
      },
      describe : {
        color : ''
      }
    }
  }
].map((item, index) => Obj.deepCover({
  id : index,
  attrs : {
    functional : {

    },
    describe : {
      color : ''
    }
  }
},item))
