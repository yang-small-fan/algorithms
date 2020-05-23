import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['./session-one.component.css']
})
export class SessionOneComponent implements OnInit {

  result: string;
  nodes = [{
    id: 'ab',
    children: [{
      id: 'cd',
      children: [{
        id: 'ef',
        children: []
      }]
    }, {
      id: 'fg',
      children: []
    }]
  }, {
    id: 'ac',
    children: [{
      id: 'ce',
      children: [{
        id: 'eg',
        children: []
      }]
    }]
  }];

  copyNodes = JSON.parse(JSON.stringify(this.nodes));

  ngOnInit(): void {
    this.setNodeParentIds(this.nodes);
  }

  private setNodeParentIds(nodes: any[], cache?: string) {
    let parentIds;
    for (const node of nodes) {
      parentIds = cache ? cache + '->' + node.id : node.id;
      node.parentId = parentIds;
      if (node.children.length > 0) {
        this.setNodeParentIds(node.children, parentIds);
      }
    }
  }

  private getNodeParentIds(nodes: any[], targetId: string): string {
    let parentId = '';
    for (const node of nodes) {
      if (node.id === targetId) {
        parentId = node.parentId;
      } else if (node.children.length > 0) {
        parentId += this.getNodeParentIds(node.children, targetId);
      }
    }
    return parentId;
  }

  test(targetId: string): void {
    const nodes = this.nodes;
    this.result = this.getNodeParentIds(nodes, targetId);
  }

  onClick(): void {

  }

}
