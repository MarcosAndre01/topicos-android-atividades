package com.example.atividade1

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.atividade1.databinding.ActivityMainBinding
import com.example.atividade1.databinding.ActivityResultBinding

private lateinit var binding: ActivityResultBinding

class ResultActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        binding = ActivityResultBinding.inflate(layoutInflater)
        setContentView(binding.root)

        val userName = intent.getStringExtra("USERNAME")
        val password = intent.getStringExtra("PASSWORD")
        binding.result.text = getString(R.string.result, userName, password)
    }
}