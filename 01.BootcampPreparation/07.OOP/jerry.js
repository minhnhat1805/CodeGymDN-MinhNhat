function Mouse(name,weight,speed,status) {
    this.name = name;
    this.weight = weight;
    this.speed = speed;
    this.status = status;
    this.shout = function() {
        console.log("chit,chit");
    }
    this.getSpeedMouse= function() {
        return this.speed ;
    }
}