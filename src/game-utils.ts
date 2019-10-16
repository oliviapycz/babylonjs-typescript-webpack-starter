import * as BABYLON from 'babylonjs';

export class GameUtils {

    /**
     * Creates a basic ground
     * @param scene
     */
    public static createGround(scene: BABYLON.Scene): BABYLON.Mesh {
        // Ground
        let groundMaterial = new BABYLON.StandardMaterial("groundMaterial", scene);
        groundMaterial.diffuseTexture = new BABYLON.Texture("./assets/texture/ground.jpg", scene);
        //groundMaterial.diffuseTexture.uScale = groundMaterial.diffuseTexture.vScale = 4;
        let ground = BABYLON.Mesh.CreateGround("ground", 512, 512, 32, scene, false);
        ground.position.y = -1;
        ground.material = groundMaterial;

        return ground;
    }

    /**
     * Creates a new dome with the pictures under fileName.
     * @param name
     * @param fileName
     * @param scene
     */
    public static createDome(name: string, fileName: string, scene: BABYLON.Scene): BABYLON.PhotoDome {
        if (!name) {
            console.error("GameUtils.createDome: name is not defined");
            return;
        }
        if (!fileName) {
            console.error("GameUtils.createDome: fileName is not defined");
            return;
        }
        if (!scene) {
            console.error("GameUtils.createDome: scene is not defined");
            return;
        }

        let dome = new BABYLON.PhotoDome(name, fileName, { resolution: 32, size: 1000}, scene);
        return dome;
    }

}