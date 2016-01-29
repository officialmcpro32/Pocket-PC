//Code by BagasMC
var times=1;
Item.defineArmor(502, "record_13", 0, "Shield","armor.png", 1, 407, ArmorType.chestplate);
Item.addShapedRecipe(502, 1, 0, [
	"wiw",
	"www",
	" w "], ["w", 5, 0, "i", 265, 0]);
Player.addItemCreativeInv(502,1)
function modTick(){
if(Player.getArmorSlot(1) == 502 || Player.getCarriedItem() == 502){
Entity.setRenderType(getPlayerEnt(),SteveShield1RenderType.renderType);
Entity.setMobSkin(getPlayerEnt(),"mob/steve.png");
Entity.addEffect(getPlayerEnt(), MobEffect.damageResistance, 10, 3, false, false);
Entity.addEffect(getPlayerEnt(), MobEffect.movementSlowdown, 10, 2, false, false);
if(times==1){
	times==2;
}
if(Entity.getHealth(getPlayerEnt())==20 && times==2){
	Entity.setCarriedItem(getPlayerEnt(),502,0)
	times==1;
	}
	}
else {
	Entity.setRenderType(getPlayerEnt(),3);
	if(times==2){
		times==1;
}
}
}
function addSteveShield1RenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
body.setTextureSize(64,64);
rLeg.setTextureSize(64,64);
lLeg.setTextureSize(64,64);
lArm.setTextureSize(64,64);
rArm.setTextureSize(64,64);
head.setTextureSize(64,64);
rArm.setTextureOffset( 13,30);
rArm.addBox(-5,0,-11, 1, 12, 22);
rArm.setTextureOffset( 37,42);
rArm.addBox(-4,5,-3, 6, 2, 6);
rArm.setTextureOffset( 16,41);
rArm.addBox(-5,0,9,1,0,2);
}
var SteveShield1RenderType = Renderer.createHumanoidRenderer();
addSteveShield1RenderType(SteveShield1RenderType);

function addSteveShieldFRenderType(renderer){
var model = renderer.getModel();
var head = model.getPart("head");
var body = model.getPart("body");
var rArm = model.getPart("rightArm");
var lArm = model.getPart("leftArm");
var rLeg = model.getPart("rightLeg");
var lLeg = model.getPart("leftLeg");
body.setTextureSize(64,64);
rLeg.setTextureSize(64,64);
lLeg.setTextureSize(64,64);
lArm.setTextureSize(64,64);
rArm.setTextureSize(64,64);
head.setTextureSize(64,64);
rArm.addBox(-11,-2,-8, 12, 22, 1);
}
var SteveShieldFRenderType = Renderer.createHumanoidRenderer();
addSteveShieldFRenderType(SteveShieldFRenderType);
