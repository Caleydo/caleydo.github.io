function demo_vis() {
  // Use the AMD; This would usually be at the top level and include other dependencies.
  require(['demo_vis_amd', "require", "exports"], function (demo_vis, require, exports) {
    demo_vis.hello();
  });
}