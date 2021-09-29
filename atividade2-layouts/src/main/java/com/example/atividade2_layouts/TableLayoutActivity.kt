package com.example.atividade2_layouts

import android.content.Intent
import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.atividade2_layouts.databinding.ActivityRelativeLayoutBinding
import com.example.atividade2_layouts.databinding.ActivityTableLayoutBinding

private lateinit var binding: ActivityTableLayoutBinding

class TableLayoutActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_table_layout)

        binding = ActivityTableLayoutBinding.inflate(layoutInflater)
        setContentView(binding.root)

        binding.nextButton.setOnClickListener {
            val intent = Intent(this, Exercicio3ConstrainLayoutActivity::class.java)
            startActivity(intent)
        }

    }

}