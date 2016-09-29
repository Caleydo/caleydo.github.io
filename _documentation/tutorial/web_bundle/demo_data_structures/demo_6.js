function demo_6($target) {

  function print(string) {
    $target.append(string + '<br>');
  }

  var evens = Caleydo.core.range.parse('0:10:2');
  var odds = Caleydo.core.range.parse('1:10:2');
  var union = evens.union(odds);
  var intersection = evens.intersect(odds);
  var ten = Caleydo.core.range.parse('0:10');

  print('Evens: ' + evens);
  print('Odds: ' + odds);
  print('Union: ' + union);
  print('Intersection: ' + intersection);
  print('Equal?: ' + union.eq(ten));

  // print('Union is all?: ' + union.isAll); // TODO: False?
  print('Intersection is none?: ' + intersection.isNone);

  var by_4 = evens.preMultiply(evens);
  var by_8 = by_4.preMultiply(evens);

  print('By 4: ' + by_4);
  print('By 8: ' + by_8);

  var without_by_4 = union.without(by_4);

  print('Without by 4: ' + without_by_4);

  // print('First: ' + union.first); // TODO: What do these mean?
  // print('Last: ' + union.last); // TODO: 0?

  var gt_5 = Caleydo.core.range.parse('5:');
  var lt_5 = Caleydo.core.range.parse(':5');

  print('> 5: ' + gt_5);
  print('< 5: ' + lt_5);

  var all_integers = gt_5.union(lt_5);

  print('All Integers: ' + all_integers);
  print('Unbound?: ' + all_integers.isUnbound); // TODO: False?

  // var product = ten.product(ten);
  // TODO: Why does this take a callback instead of just producing the Cartesian product?
  // print('10 x 10: ' + product);

  /* TODO:
ndim
clone
swap
filter
dim
invert
indexRangeOf
indexOf
size
split
product
  */

  // TODO: multi-dimensional ranges
}