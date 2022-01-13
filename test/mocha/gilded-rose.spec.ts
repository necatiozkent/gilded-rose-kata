import { expect } from 'chai';
import { Item, GildedRose } from '@/gilded-rose';

describe('GildedRose', () => {
  it('(+5 Dexterity Vest) sellIn should be decrease and (Sulfuras, Hand of Ragnaros) sellIn should be not decrease.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 40), new Item("Sulfuras, Hand of Ragnaros", 5, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(9);
    expect(items[1].sellIn).to.be.equal(5);
  });

  it('Should name be +5 Dexterity Vest.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.be.equal(gildedRose.items[0].name);
  });

  it('Should name be Aged Brie.', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.be.equal(gildedRose.items[0].name);
  });

  it('Should name be Sulfuras, Hand of Ragnaros.', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.be.equal(gildedRose.items[0].name);
  });

  it('Should name be Backstage passes to a TAFKAL80ETC concert.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].name).to.be.equal(gildedRose.items[0].name);
  });

  it('(+5 Dexterity Vest) Quality should be decreased by one.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(39);
  });

  it('(+5 Dexterity Vest) Quality should be decreased by two if sellIn is negative.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(38);
  });

  it('(+5 Dexterity Vest) sellIn should be decreased by one.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 3, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(2);
  });

  it('(+5 Dexterity Vest) sellIn should be decreased by one where sellIn is zero.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 0, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(-1);
  });

  it('(+5 Dexterity Vest) Quality should not be negative.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 3, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(0);
  });

  it('(+5 Dexterity Vest) sellIn should decrease when quality is zero.', () => {
    const gildedRose = new GildedRose([new Item("+5 Dexterity Vest", 3, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(2);
  });

  it('(Aged Brie) Quality should be increased.', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 40)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(41);
  });

  it('(Aged Brie) Quality should be max 50.', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.not.greaterThan(50);
  });

  it('(Aged Brie) Quality should be same when sellIn is zero.', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(50);
  });

  it('(Aged Brie) sellIn should be decease by one when quality is max.', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(9);
  });

  it('(Aged Brie) sellIn should decrease when is zero.', () => {
    const gildedRose = new GildedRose([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(-1);
  });

  it('(Sulfuras, Hand of Ragnaros) Quality should not change.', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(80);
  });

  it('(Sulfuras, Hand of Ragnaros) Quality should not change, when sellIn is zero.', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(80);
  });

  it('(Sulfuras, Hand of Ragnaros) sellIn should not decrease, when sellIn is zero.', () => {
    const gildedRose = new GildedRose([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(0);
  });

  it('(Backstage passes to a TAFKAL80ETC concert) Quality should be max 50.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 1, 49)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(50);
  });

  it('(Backstage passes to a TAFKAL80ETC concert) Quality increase by one until ten.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(1);
  });

  it('(Backstage passes to a TAFKAL80ETC concert) Quality increase by two between five and ten.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(2);
  });

  it('(Backstage passes to a TAFKAL80ETC concert) Quality increase by three between zero and five.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(3);
  });

  it('(Backstage passes to a TAFKAL80ETC concert) Quality should be zero when sellIn is zero.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(0);
  });

  it('(Backstage passes to a TAFKAL80ETC concert) sellIn should be decrease by one.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(9);
  });

  it('(Backstage passes to a TAFKAL80ETC concert) sellIn should be decrease by one where sellIn is zero.', () => {
    const gildedRose = new GildedRose([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(-1);
  });

  it('(Conjured mana cake) Quality should decrease by two', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 2, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(18);
  });

  it('(Conjured mana cake) Quality should decrease by four when sellIn is zero', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 20)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(16);
  });

  it('(Conjured mana cake) Quality should decrease to zero when value is one', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 10, 1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(0);
  });

  it('(Conjured mana cake) Quality should decrease to zero when value is one and sellIn is negative', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", -1, 1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(0);
  });

  it('(Conjured mana cake) Quality should decrease to zero when value is one and sellIn is zero', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 1)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(0);
  });

  it('(Conjured mana cake) Quality should not decrease when quality is zero', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 0)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(0);
  });

  it('(Conjured mana cake) Quality should to zero when quality is between zero and three, and sellIn is negative', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", -1, 3)]);
    const items = gildedRose.updateQuality();

    expect(items[0].quality).to.be.equal(0);

  });

  it('(Conjured mana cake) Quality should decrease by one.', () => {
    const gildedRose = new GildedRose([new Item("Conjured Mana Cake", 0, 10)]);
    const items = gildedRose.updateQuality();

    expect(items[0].sellIn).to.be.equal(-1);

  });
});
