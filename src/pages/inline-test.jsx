export default function InlineTest() {
  const styles = {
    container: {
      padding: '2rem',
      maxWidth: '800px',
      margin: '0 auto',
    },
    heading: {
      fontSize: '2rem',
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: '#2563eb',
    },
    paragraph: {
      fontSize: '1.125rem',
      marginBottom: '1rem',
    },
    box: {
      backgroundColor: '#f3f4f6',
      padding: '1rem',
      borderRadius: '0.5rem',
      border: '1px solid #d1d5db',
    },
    button: {
      backgroundColor: '#2563eb',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.25rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      cursor: 'pointer',
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>内联样式测试页面</h1>
      <p style={styles.paragraph}>这是一个使用内联样式的测试页面。</p>
      <div style={styles.box}>
        <p>如果您能看到这个框有灰色背景和边框，说明内联样式正常工作。</p>
      </div>
      <button style={styles.button}>测试按钮</button>
    </div>
  );
} 