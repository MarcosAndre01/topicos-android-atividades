package com.example.atividade2_layouts

import androidx.appcompat.app.AppCompatActivity
import android.os.Bundle
import com.example.atividade2_layouts.databinding.ActivityTableLayoutBinding

private lateinit var binding: ActivityTableLayoutBinding

class TableLayoutActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_table_layout)

    }

}