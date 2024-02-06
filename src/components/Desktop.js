
import { useRef } from 'react';


function handleDownload(imageUrl) {
  const link = document.createElement('a');
  link.href = imageUrl;
  link.download = 'image.jpg'; // Specify the desired filename for download
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handlePrint(imageRef) {
  const image = imageRef.current;

  if (!image) {
    console.error('Image element not found.');
    return;
  }

  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write(`<img src="${image.src}" style="max-width:100%;height:auto;" />`);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
}

const Desktop = () => {

  const imageRef = useRef();
  return (
    <div className="grid-container">
    <div className="grid-item">
  <img src="image-url.jpg" alt="Placeholder Image" ref={imageRef} />
  <p>Placeholder Text</p>
  <div className="button-container">
    <button className="download-button" onClick={() => handleDownload('image-url.jpg')}>Download</button>
    <button className="print-button" onClick={() => handlePrint(imageRef)}>Print</button>
  </div>
</div>
<div class="grid-item">
  <img src="image-url.jpg" alt="Placeholder Image" />
  <p>Placeholder Text</p>
</div>
<div class="grid-item">
  <img src="image-url.jpg" alt="Placeholder Image" />
  <p>Placeholder Text</p>
</div>
<div class="grid-item">
  <img src="image-url.jpg" alt="Placeholder Image" />
  <p>Placeholder Text</p>
</div>
<div class="grid-item">
  <img src="image-url.jpg" alt="Placeholder Image" />
  <p>Placeholder Text</p>
</div>
<div class="grid-item">
  <img src="image-url.jpg" alt="Placeholder Image" />
  <p>Placeholder Text</p>
</div>
    </div>
  );
};

export default Desktop;
