var determineOrder = (function determineOrder$(tasks, chosenTasks) {
  /* determine-order eval.sibilant:1:0 */

  var top = chosenTasks[0];
  var q = [top],
    list = [top];
  (function () {
    var while$724 = undefined;
    while (q.length > 0) {
      while$724 = (function () {
        var top = q.shift();
        var task = findTask(tasks, top);
        list = createList(list, task.depends);
        var nextTask = findTask(tasks, task.depends[0]);
        return q = createQ(nextTask, q);
      }).call(this);
    };
    return while$724;
  }).call(this);
  var rest = chosenTasks.slice(1);
  var answer = (new Set([...list.reverse()].concat(rest)));
  return Array.from(answer);
});
var createList = (function createList$(list, dependencies) {
  /* create-list eval.sibilant:17:0 */

  return (function () {
    if (dependencies.length > 0) {
      return list.concat([dependencies[0]]);
    } else {
      return list;
    }
  }).call(this);
});
var createQ = (function createQ$(nextTask, q) {
  /* create-q eval.sibilant:21:0 */

  return (function () {
    if (nextTask) {
      return q.concat([nextTask.task]);
    } else {
      return q;
    }
  }).call(this);
});
var findTask = (function findTask$(tasks, target) {
  /* find-task eval.sibilant:24:0 */

  return tasks.find((function (task) {
    /* eval.sibilant:25:14 */

    return task.task === target;
  }));
});