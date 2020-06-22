import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-three',
  templateUrl: './session-three.component.html',
  styleUrls: ['./session-three.component.css']
})
export class SessionThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // 全排列，不重复! --------------一个元素和剩下元素全排列
    const result1 = this.permute_1([1, 2, 3]);
    console.log(result1);
    // 全排列，不重复! --------------回溯
    const result2 = this.permute_2([1, 2, 3]);
    console.log(result2);
    // 全排列，重复! ----------------回溯剪枝
    const result3 = this.permuteUnique([2, 1, 1]);
    console.log(result3);
  }

  permute_1(nums: number[]): number[][] {
    if (nums.length === 1) {
      return [nums];
    }
    const res: number[][] = [];
    for (let i = 0; i < nums.length; i++) {
      const res1 = this.permute_1(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)));
      res1.forEach((item) => {
        res.push([nums[i]].concat(item));
      });
    }
    return res;
  }

  permute_2(nums: number[]): number[][] {
    const list: number[][] = [];
    this._permute_2(list, [], nums);
    return list;
  }

  _permute_2(list: number[][], temp: number[], nums: number[]) {
    if (temp.length === nums.length) {
      return list.push([...temp]);
    }
    for (const n of nums) {
      if (temp.includes(n)) {
        continue;
      }
      temp.push(n);
      this._permute_2(list, temp, nums);
      temp.pop();
    }
  }


  permuteUnique(nums: number[]): number[][] {
    const list: number[][] = [];
    const idx = [];
    nums = nums.sort((a, b) => {
      return a - b;
    });
    this._permuteUnique(list, [], nums, idx);
    return list;
  }

  _permuteUnique(list: number[][], temp: number[], nums: number[], idx: number[]) {
    if (temp.length === nums.length) {
      return list.push([...temp]);
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === nums[i - 1] && idx.includes(i - 1)) {
        continue;
      }
      if (!idx.includes(i)) {
        temp.push(nums[i]);
        idx.push(i);
        this._permuteUnique(list, temp, nums, idx);
        temp.pop();
        idx.pop();
      }
    }
  }

}
