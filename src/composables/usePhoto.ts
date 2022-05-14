// import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export function usePhoto() {
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Base64,
            source: CameraSource.Camera,
            quality: 100,
        });
    }
    return { takePhoto }
}