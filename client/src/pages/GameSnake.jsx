import React from 'react';
import Phaser from "phaser";
import Food from '../objects/Food';
import Snake from '../objects/Snake';


const GameSnake = () => {

    var config = {
        type: Phaser.AUTO,
        width: 640,
        height: 480,
        backgroundColor: '#bfcc00',
        parent: 'phaser',
        scale: {
            "mode": Phaser.Scale.NONE,
            "autoCenter": Phaser.Scale.CENTER_BOTH
        },
        scene: {
            preload: preload,
            create: create,
            update: update
        }
    };

    let snake;
    let food;
    let cursors;
    let start;
    let end;
    let score;
    let scoreText;
    let addScore = 5;
    let timePart = 30000;
    let timeView;
    let delta

    const game = new Phaser.Game(config);

    function preload() {
        this.load.image('food', '../img/body.png');
        this.load.image('body', '../img/player.png');
    }


    function create() {
        start = new Date().getTime();
        end = start + timePart;
        console.log(start, end);
        food = new Food(this, 3, 4);
        snake = new Snake(this, 8, 8);
       //  Create our keyboard controls
        cursors = this.input.keyboard.createCursorKeys();
        score = 0 ;
        scoreText = this.add.text(20, 20, ' score: '  + score, { font: '20px Arial', fill: "#fff" });
        timeView = this.add.text(500, 20, ' time: '  + (end - new Date().getTime()) , { font: '20px Arial', fill: "#fff" });
    }

    function update(time, delta) {
        delta = new String(end - new Date().getTime());
        if (!snake.alive || delta <= 0) {
            this.add.text(200, 200, ' The End: '  , { font: '50px Arial', fill: "#fff" });
            return;
        }

        timeView.setText(' time: '  + delta[0]+delta[1]);

        /**
        * Check which key is pressed, and then change the direction the snake
        * is heading based on that. The checks ensure you don't double-back
        * on yourself, for example if you're moving to the right and you press
        * the LEFT cursor, it ignores it, because the only valid directions you
        * can move in at that time is up and down.
        */
        if (cursors.left.isDown) {
            snake.faceLeft();
        }
        else if (cursors.right.isDown) {
            snake.faceRight();
        }
        else if (cursors.up.isDown) {
            snake.faceUp();
        }
        else if (cursors.down.isDown) {
            snake.faceDown();
        }

        if (snake.update(time)) {
            //  If the snake updated, we need to check for collision against food

            if (snake.collideWithFood(food)) {
                repositionFood();
            }
        }
    }

    /**
    * We can place the food anywhere in our 40x30 grid
    * *except* on-top of the snake, so we need
    * to filter those out of the possible food locations.
    * If there aren't any locations left, they've won!
    *
    * @method repositionFood
    * @return {boolean} true if the food was placed, otherwise false
    */
    function repositionFood() {
        //  First create an array that assumes all positions
        //  are valid for the new piece of food

        //  A Grid we'll use to reposition the food each time it's eaten
        var testGrid = [];

        for (var y = 0; y < 30; y++) {
            testGrid[y] = [];

            for (var x = 0; x < 40; x++) {
                testGrid[y][x] = true;
            }
        }

        snake.updateGrid(testGrid);

        //  Purge out false positions
        var validLocations = [];

        for (var y = 0; y < 30; y++) {
            for (var x = 0; x < 40; x++) {
                if (testGrid[y][x] === true) {
                    //  Is this position valid for food? If so, add it here ...
                    validLocations.push({ x: x, y: y });
                }
            }
        }

        if (validLocations.length > 0) {
            //  Use the RNG to pick a random food position
            var pos = Phaser.Math.RND.pick(validLocations);

            //  And place it
            food.setPosition(pos.x * 16, pos.y * 16);
            
            score +=addScore;
            scoreText.setText(' score: '  + score);

            return true;
        }
        else {
            return false;
        }
    }
    return (<div id="phaser"></div>)
}


export default GameSnake;

