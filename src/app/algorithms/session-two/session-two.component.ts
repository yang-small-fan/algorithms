import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-two',
  templateUrl: './session-two.component.html',
  styleUrls: ['./session-two.component.css']
})
export class SessionTwoComponent implements OnInit {

  constructor() { }

  result: any[];
  resultCollections: number[][];
  inputString = '1,2,3,4,5,6';

  ngOnInit(): void {
    const nums = this.inputString.split(',').map(a => parseFloat(a));
    this.resultCollections = this.getCombination(nums);
  }

  getCombination(nums: number[], index = 0, group = []): number[][] {
    const needApply = new Array();
    needApply.push([nums[index]]);
    for (const i of group.keys()) {
      const copyNums = group[i].concat();
      copyNums.push(nums[index]);
      needApply.push(copyNums);
    }
    group.push(...needApply);
    if (index + 1 >= nums.length) {
      return group;
    } else {
      return this.getCombination(nums, index + 1, group);
    }
  }

  test(str: string): void {
    const results = [];
    const input = parseFloat(str);
    for (const values of this.resultCollections.values()) {
      const total = values.reduce((pre, curr) => {
        return pre + curr;
      });
      if (total === input) {
        results.push(values);
      }
    }
    this.result = results;
  }

  onClick(): void {
  }
}
