// import { ref, onMounted, watch } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';

export function usePhoto() {
    const takePhoto = async () => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Base64,
            source: CameraSource.Camera,
            quality: 100,
        });
        const coordinates = await Geolocation.getCurrentPosition()
        console.log('coordinates')

        console.log(coordinates)
        return {
            photo, coordinates
        }
    }
    return { takePhoto }
}