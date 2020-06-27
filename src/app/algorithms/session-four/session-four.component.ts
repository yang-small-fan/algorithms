import { Component, OnInit } from '@angular/core';

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

@Component({
  selector: 'app-session-four',
  templateUrl: './session-four.component.html',
  styleUrls: ['./session-four.component.css']
})
export class SessionFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // 查找并插入
    const d = this.searchInsert([1, 3, 5, 6], 2);
    console.log(d);
    const c = this.binarySearch([1, 3, 5, 6, 10, 12, 16, 19, 20, 40], 20);
    console.log(c);
  }

  searchInsert(nums: number[], target: number): number {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === target) {
        return i;
      }
    }
    if (target < nums[0]) {
      return 0;
    }
    if (target > nums[nums.length - 1]) {
      return nums.length;
    }
    for (let i = 0; i < nums.length; i++) {

      if (nums[i] < target && target < nums[i + 1]) {
        return i + 1;
      }
    }
    return 0;
  }

  binarySearch(nums: number[], target: number): number {
    const f = 0;
    const l = nums.length - 1;
    const m = Math.floor((f + l) / 2);
    while (nums.length >= 1) {
      if (nums[m] === target) {
        return nums[m];
      }
      if (target < nums[m]) {
        nums = nums.slice(f, m);
      }
      if (target > nums[m]) {
        nums = nums.slice(m + 1, l + 1);
      }
      return this.binarySearch(nums, target);
    }
  }

  helper = (root: TreeNode, lower: number, upper: number): boolean => {
    if (root === null) {
      return true;
    }
    if (root.val <= lower || root.val >= upper) {
      return false;
    }
    return this.helper(root.left, lower, root.val) && this.helper(root.right, root.val, upper);
  }

  isValidBST(root: TreeNode) {
    return this.helper(root, -Infinity, Infinity);
  }

}
