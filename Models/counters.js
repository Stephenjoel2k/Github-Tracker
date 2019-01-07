const Counter = (PE, PRE, ICE, PRRCE, CCE) => {
  const PR = LoginCount(PRE);
  const IC = LoginCount(ICE);
  const PRRC = LoginCount(PRRCE);
  const CC = LoginCount(CCE);
  const Commits = Merge(PE, PRE, "commits");
  const file = SumCount(PRE, "changed_files");
  const add = Merge(PE, PRE, "add");
  const del = Merge(PE, PRE, "del");
  const total = Merge(PE, PRE, "total");
  const object_array = [Commits, PR, IC, PRRC, CC, file, add, del, total];
  return object_array;
};

const LoginCount = Datas => {
  let counter_object = {};
  Datas.forEach(Data => {
    let login = Data.name;
    let counter;
    if (counter_object[login]) {
      counter = counter_object[login];
    } else {
      counter = 0;
    }
    counter += 1;
    counter_object[login] = counter;
  });
  return counter_object;
};

const SumCount = (Datas, x) => {
  let counter_object = {};
  Datas.forEach(Data => {
    let login = Data.name;
    let add = Data[x];
    let existingTotal;
    let counter;
    if (counter_object[login]) {
      existingTotal = counter_object[login];
    } else {
      existingTotal = 0;
    }
    counter = add + existingTotal;
    counter_object[login] = counter;
  });
  return counter_object;
};

const Merge = (Data1, Data2, x) => {
  const data = Data2.concat(Data1);
  const result = SumCount(data, x);
  return result;
};

module.exports = { Counter };
