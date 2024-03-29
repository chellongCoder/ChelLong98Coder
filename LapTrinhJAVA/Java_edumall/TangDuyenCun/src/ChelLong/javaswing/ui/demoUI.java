package ChelLong.javaswing.ui;

import java.awt.BorderLayout;
import java.awt.Color;
import java.awt.Container;
import java.awt.FlowLayout;
import java.awt.Font;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.BoxLayout;
import javax.swing.ImageIcon;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;

public class demoUI extends JFrame {
	
	JButton btnClick;
	
	public demoUI(String title) {
		super(title);
		addControls();
		addEvents();
	}

	private void addEvents() {
		// TODO Auto-generated method stub
		btnClick.addActionListener(new ActionListener() {
			
			@Override
			public void actionPerformed(ActionEvent e) {
				// TODO Auto-generated method stub
				xuLyKichChuot();
			}
		});
		
	}

	protected void xuLyKichChuot() {
		// TODO Auto-generated method stub
		QuestionUI ui = new QuestionUI("");
		ui.showWindow();
	}

	private void addControls() {
		// TODO Auto-generated method stub
		Container con = getContentPane();
		con.setLayout(new BoxLayout(con, BoxLayout.Y_AXIS));
		
		JPanel pnImage = new JPanel();
		pnImage.setLayout(new BorderLayout());
		JLabel lblImage = new JLabel(new ImageIcon("images//anime.png"));
		pnImage.add(lblImage, BorderLayout.CENTER);
		con.add(pnImage);
		
		JPanel pnTitle = new JPanel();
		pnTitle.setLayout(new FlowLayout(FlowLayout.CENTER));
		JLabel lblTitle = new JLabel("Cún ơi! T có điều muốn nói :))");
		lblTitle.setFont(new Font("times new roman", Font.ITALIC, 20));
		JLabel lblLove = new JLabel(new ImageIcon("images//heart.png"));
		pnTitle.add(lblTitle);
		pnTitle.add(lblLove);
		con.add(pnTitle);
		
		JPanel pnButton = new JPanel();
		pnButton.setLayout(new FlowLayout(FlowLayout.CENTER));
		btnClick = new JButton("Kích vào đây nè", new ImageIcon("images//button.png"));
		pnButton.add(btnClick);
		con.add(pnButton);
	}
	
	public void showWindow() {
		this.setSize(500, 320);
		this.setDefaultCloseOperation(EXIT_ON_CLOSE);
		this.setLocationRelativeTo(null);
		this.setVisible(true);
	}
}
