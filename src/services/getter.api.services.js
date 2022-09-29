export default function GetData(_url) {
    return fetch(_url).then(value => value.json())
}