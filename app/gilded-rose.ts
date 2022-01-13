export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

const AgedBrie = {name: 'Aged Brie'};
const Backstage = {name: 'Backstage passes to a TAFKAL80ETC concert'};
const Sulfuras = {name: 'Sulfuras, Hand of Ragnaros'};
const Conjured = {name: 'Conjured Mana Cake'};

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      switch (item.name) {
        case AgedBrie.name:
          item.quality++;
          break;
        case Sulfuras.name: return item;
        case Backstage.name:
          if (item.sellIn < 1) {
            item.quality -= item.quality;
          } else {
            if (item.sellIn < 11) item.quality++;
            if (item.sellIn < 6) item.quality++;
            item.quality++;
          }

          break;
        case Conjured.name:
          if (item.sellIn < 1) item.quality = item.quality -2;
          item.quality = item.quality -2;
          break;
        default:
          if (item.sellIn < 1) item.quality--;
          item.quality--;
          break;
      }

      if (item.quality > 50) item.quality = 50;
      if (item.quality < 0) item.quality = 0;
      item.sellIn--;
    });

    return this.items;
  }
}
