qunit_module('demo_6');
qunit_test_includes('evens?', 'Evens: (0:10:2)');
qunit_test_includes('odds?', 'Odds: (1:10:2)');
qunit_test_includes('union?', 'Union: (0:10)');
qunit_test_includes('intersect?', 'Intersection: ()');
//qunit_test_includes('equal?', 'Equal?: true'); Fails here? https://travis-ci.org/Caleydo/caleydo.github.io/builds/161121063#L396
qunit_test_includes('none?', 'Intersection is none?: true');
qunit_test_includes('by 4?', 'By 4: (0,4,8)');
qunit_test_includes('by 8?', 'By 8: (0,8)');
qunit_test_includes('w/o 4?', 'Without by 4: (1:4,5:8,9)');
qunit_test_includes('gt 5?', '&gt; 5: (5:NaN)');
qunit_test_includes('lt 5?', '&lt; 5: (NaN:5)');
qunit_test_includes('all integers?', 'All Integers: ()');
