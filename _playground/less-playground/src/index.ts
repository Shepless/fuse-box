import "~/less/reset.less";
import {ComponentA} from "~/component-a";
import {ComponentB} from "~/component-b";

const componentOne = new ComponentA('.component-one-wrapper');
componentOne.render();

const componentTwo = new ComponentA('.component-two-wrapper');
componentTwo.render();

const componentThree = new ComponentB('.component-three-wrapper');
componentThree.render();

const componentFour = new ComponentB('.component-four-wrapper');
componentFour.render();