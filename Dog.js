class Dog {

    constructor(x, y) {

        this.sprite = createSprite(x, y)


        this.sprite.addImage(dogIMG)
        this.sprite.scale = 0.5
    }

    updateVal = (x) => {

        if (x <= 0) {
            x = 0
        } else {
            x = x - 1
        }


        database.ref("/").update({
            Food: x
        });

    }

    feed() {

        if (keyWentDown("up")) {

            this.updateVal(foodS);


            this.sprite.addImage(happyIMG);

            ft = "true"

            setTimeout(() => {
                this.sprite.addImage(dogIMG)
            }, 5000)
        }

    }



}