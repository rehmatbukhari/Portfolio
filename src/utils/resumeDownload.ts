// Resume download utility function
export const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf'; // Resume file in public folder
  link.download = 'Rehmat_Bukhari_Resume.pdf';
  link.click();
};
